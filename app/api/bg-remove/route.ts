import { NextRequest, NextResponse } from 'next/server';

const API_KEY = '***REMOVED***';
const API_URL = 'https://bg-remover-six-rose.vercel.app/api/process';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;

    if (!image) {
      return NextResponse.json(
        { success: false, error: 'Missing image', message: 'Please provide an image file in the \'image\' field.', code: 'MISSING_IMAGE' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(image.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type', message: 'Only JPEG, PNG, and WebP images are supported.', code: 'INVALID_FILE_TYPE' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File too large', message: 'Image file must be smaller than 10MB.', code: 'FILE_TOO_LARGE' },
        { status: 413 }
      );
    }

    // Check domain restriction
    const referer = request.headers.get('referer');
    const allowedDomains = ['fasttools.store', 'www.fasttools.store'];
    const isAllowedDomain = referer && allowedDomains.some(domain => referer.includes(domain));

    if (!isAllowedDomain) {
      return NextResponse.json(
        { success: false, error: 'Forbidden', message: 'Access denied. Requests are only allowed from authorized domains.', code: 'DOMAIN_NOT_ALLOWED' },
        { status: 403 }
      );
    }

    // Create form data for external API
    const externalFormData = new FormData();
    externalFormData.append('image', image);

    // Call external API with 5 minute timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 300000); // 5 minutes = 300000ms

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: externalFormData,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Handle specific error codes according to documentation
      if (response.status === 401) {
        return NextResponse.json(
          { success: false, error: 'Unauthorized', message: 'Invalid or missing API key. Please provide a valid Bearer token.', code: 'INVALID_API_KEY' },
          { status: 401 }
        );
      }

      if (response.status === 429) {
        return NextResponse.json(
          { success: false, error: 'Rate limit exceeded', message: 'Too many requests. Please try again later.', code: 'RATE_LIMIT_EXCEEDED', retryAfter: 3600 },
          { status: 429 }
        );
      }

      if (response.status === 403) {
        return NextResponse.json(
          { success: false, error: 'Forbidden', message: 'Access denied. Requests are only allowed from authorized domains.', code: 'DOMAIN_NOT_ALLOWED' },
          { status: 403 }
        );
      }

      if (response.status === 413) {
        return NextResponse.json(
          { success: false, error: 'File too large', message: 'Image file must be smaller than 10MB.', code: 'FILE_TOO_LARGE' },
          { status: 413 }
        );
      }

      if (response.status === 503) {
        return NextResponse.json(
          {
            success: false,
            error: 'Server-side processing temporarily unavailable',
            message: 'This API currently supports client-side processing only. Please use the web interface for background removal.',
            code: 'SERVER_SIDE_UNAVAILABLE',
            clientSide: true,
            imageInfo: {
              filename: image.name,
              size: image.size,
              type: image.type
            }
          },
          { status: 503 }
        );
      }

      // Generic error
      return NextResponse.json(
        { success: false, error: 'Internal server error', message: 'An unexpected error occurred while processing your request.', code: 'INTERNAL_ERROR' },
        { status: 500 }
      );
    }

      const data = await response.json();

      // Return successful response according to documentation
      return NextResponse.json(data);

    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      // Handle timeout error
      if (fetchError.name === 'AbortError') {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Request timeout', 
            message: 'Background removal is taking longer than expected. Please try with a smaller image or try again later.', 
            code: 'TIMEOUT' 
          },
          { status: 504 }
        );
      }
      throw fetchError;
    }

  } catch (error) {
    console.error('Background removal API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', message: 'An unexpected error occurred while processing your request.', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}