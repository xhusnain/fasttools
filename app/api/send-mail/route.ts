import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Resend API Key - hardcoded
const RESEND_API_KEY = '***REMOVED***';

// Email configuration
const EMAIL_CONFIG = {
  from: 'FastTools <onboarding@resend.dev>',
  to: 'talk2husnain@gmail.com',
};

// Initialize Resend
const resend = new Resend(RESEND_API_KEY);

// Email templates with hardcoded HTML
const TEMPLATES = {
  indexnow_success: {
    subject: '✅ IndexNow Success - FastTools',
    getHtml: (data: any) => `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
            .card { max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 24px; text-align: center; }
            .icon { font-size: 40px; margin-bottom: 8px; }
            .title { margin: 0; font-size: 20px; font-weight: 600; }
            .content { padding: 24px; }
            .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
            .stat { background: #f9fafb; padding: 12px; border-radius: 8px; text-align: center; }
            .stat-value { font-size: 24px; font-weight: bold; color: #10b981; margin: 0; }
            .stat-label { font-size: 11px; color: #6b7280; margin: 4px 0 0 0; text-transform: uppercase; }
            .info { background: #ecfdf5; border-left: 3px solid #10b981; padding: 12px; border-radius: 4px; margin: 16px 0; font-size: 13px; color: #065f46; }
            .footer { padding: 16px 24px; background: #f9fafb; text-align: center; font-size: 11px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="icon">✅</div>
              <h1 class="title">IndexNow Submitted Successfully</h1>
            </div>
            <div class="content">
              <div class="stats">
                <div class="stat">
                  <p class="stat-value">${data.totalUrls}</p>
                  <p class="stat-label">Total URLs</p>
                </div>
                <div class="stat">
                  <p class="stat-value">${data.batches}</p>
                  <p class="stat-label">Batches</p>
                </div>
                <div class="stat">
                  <p class="stat-value">${data.sitemapUrls}</p>
                  <p class="stat-label">Pages</p>
                </div>
                <div class="stat">
                  <p class="stat-value">${data.imageUrls}</p>
                  <p class="stat-label">Images</p>
                </div>
              </div>
              <div class="info">
                ⏱️ Completed in ${data.duration} at ${data.timestamp}
              </div>
            </div>
            <div class="footer">
              FastTools.store • Automated IndexNow Integration
            </div>
          </div>
        </body>
      </html>
    `,
  },
  
  indexnow_failure: {
    subject: '❌ IndexNow Failed - FastTools',
    getHtml: (data: any) => `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
            .card { max-width: 500px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 24px; text-align: center; }
            .icon { font-size: 40px; margin-bottom: 8px; }
            .title { margin: 0; font-size: 20px; font-weight: 600; }
            .content { padding: 24px; }
            .error { background: #fef2f2; border-left: 3px solid #ef4444; padding: 12px; border-radius: 4px; margin: 16px 0; }
            .error-title { font-weight: 600; color: #991b1b; margin: 0 0 4px 0; font-size: 13px; }
            .error-msg { color: #7f1d1d; margin: 0; font-size: 13px; }
            .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
            .stat { background: #f9fafb; padding: 12px; border-radius: 8px; text-align: center; }
            .stat-value { font-size: 24px; font-weight: bold; color: #ef4444; margin: 0; }
            .stat-label { font-size: 11px; color: #6b7280; margin: 4px 0 0 0; text-transform: uppercase; }
            .info { background: #fef2f2; padding: 12px; border-radius: 4px; margin: 16px 0; font-size: 12px; color: #991b1b; }
            .footer { padding: 16px 24px; background: #f9fafb; text-align: center; font-size: 11px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="icon">❌</div>
              <h1 class="title">IndexNow Submission Failed</h1>
            </div>
            <div class="content">
              <div class="error">
                <p class="error-title">⚠️ Error Details</p>
                <p class="error-msg">${data.error}</p>
              </div>
              <div class="stats">
                <div class="stat">
                  <p class="stat-value">${data.totalUrls}</p>
                  <p class="stat-label">URLs Attempted</p>
                </div>
                <div class="stat">
                  <p class="stat-value">${data.failedBatches}</p>
                  <p class="stat-label">Failed Batches</p>
                </div>
              </div>
              <div class="info">
                🕐 ${data.timestamp}
              </div>
            </div>
            <div class="footer">
              FastTools.store • Automated IndexNow Integration
            </div>
          </div>
        </body>
      </html>
    `,
  },
};

// API Route Handlers
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { template, data } = body;

    if (!template || !data) {
      return NextResponse.json(
        { error: 'Missing required fields: template, data' },
        { status: 400 }
      );
    }

    // Validate template exists
    if (!TEMPLATES[template as keyof typeof TEMPLATES]) {
      return NextResponse.json(
        { error: `Invalid template. Available: ${Object.keys(TEMPLATES).join(', ')}` },
        { status: 400 }
      );
    }

    const emailTemplate = TEMPLATES[template as keyof typeof TEMPLATES];
    const html = emailTemplate.getHtml(data);

    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: [EMAIL_CONFIG.to],
      subject: emailTemplate.subject,
      html: html,
    });

    if (error) {
      return NextResponse.json(
        { 
          success: false,
          error: error.message,
          message: 'Failed to send email' 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      messageId: emailData?.id || 'unknown',
      message: 'Email sent successfully',
    });

  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  // Test endpoint - shows available templates
  return NextResponse.json({
    status: 'ready',
    message: 'Email API is ready. Use POST to send emails.',
    config: {
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
    },
    availableTemplates: Object.keys(TEMPLATES).map(key => ({
      name: key,
      subject: TEMPLATES[key as keyof typeof TEMPLATES].subject,
    })),
    usage: {
      endpoint: '/api/send-mail',
      method: 'POST',
      body: {
        template: 'indexnow_success | indexnow_failure',
        data: {
          '{{placeholder}}': 'value to replace in template',
        },
      },
      example: {
        template: 'indexnow_success',
        data: {
          totalUrls: 114,
          sitemapUrls: 97,
          imageUrls: 17,
          batches: 1,
          duration: '3.45s',
          timestamp: new Date().toLocaleString(),
        },
      },
    },
  });
}
