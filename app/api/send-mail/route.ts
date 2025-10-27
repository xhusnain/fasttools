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
    subject: '✅ Microsoft Bing URL Submission - Success',
    getHtml: (data: any) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; min-height: 100vh; }
            .email-container { max-width: 580px; margin: 40px auto; }
            .card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
            .brand-header { background: #ffffff; padding: 24px 32px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; }
            .logo { display: flex; align-items: center; gap: 12px; }
            .logo-icon { height: 36px; width: auto; }
            .logo-text { font-size: 18px; font-weight: 700; color: #111827; letter-spacing: -0.5px; }
            .badge { background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
            .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 32px; text-align: center; }
            .icon { font-size: 48px; margin-bottom: 12px; }
            .title { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .subtitle { margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; font-weight: 400; }
            .content { padding: 32px; }
            .section-title { font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 16px 0; }
            .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 0 0 24px 0; }
            .stat { background: linear-gradient(135deg, #f0fdf4, #dcfce7); border: 1px solid #86efac; padding: 20px; border-radius: 12px; text-align: center; transition: transform 0.2s; }
            .stat:hover { transform: translateY(-2px); }
            .stat-value { font-size: 32px; font-weight: 800; color: #059669; margin: 0; line-height: 1; }
            .stat-label { font-size: 11px; color: #065f46; margin: 8px 0 0 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }
            .info-box { background: #f0f9ff; border: 1px solid #bae6fd; border-left: 4px solid #0284c7; padding: 16px; border-radius: 8px; margin: 24px 0 0 0; }
            .info-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #0c4a6e; margin: 0; }
            .info-icon { font-size: 16px; }
            .footer { padding: 24px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; }
            .footer-content { text-align: center; }
            .footer-title { font-size: 12px; font-weight: 600; color: #374151; margin: 0 0 8px 0; }
            .footer-links { display: flex; justify-content: center; gap: 16px; margin: 12px 0; }
            .footer-link { font-size: 11px; color: #6b7280; text-decoration: none; }
            .footer-link:hover { color: #111827; }
            .footer-text { font-size: 11px; color: #9ca3af; margin: 8px 0 0 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="card">
              <div class="brand-header">
                <div class="logo">
                  <img src="https://www.fasttools.store/logo.png" alt="FastTools" class="logo-icon" />
                  <span class="logo-text">FastTools</span>
                </div>
                <div class="badge">Success</div>
              </div>
              <div class="header">
                <div class="icon">✅</div>
                <h1 class="title">Microsoft Bing URL Submission</h1>
                <p class="subtitle">Your website URLs have been successfully submitted via IndexNow API</p>
              </div>
              <div class="content">
                <p class="section-title">📊 Submission Summary</p>
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
                    <p class="stat-label">Page URLs</p>
                  </div>
                  <div class="stat">
                    <p class="stat-value">${data.imageUrls}</p>
                    <p class="stat-label">Image URLs</p>
                  </div>
                </div>
                <div class="info-box">
                  <p class="info-row">
                    <span class="info-icon">⏱️</span>
                    <strong>Completed in ${data.duration}</strong> at ${data.timestamp}
                  </p>
                </div>
              </div>
              <div class="footer">
                <div class="footer-content">
                  <p class="footer-title">FastTools Automated IndexNow Integration</p>
                  <div class="footer-links">
                    <a href="https://www.fasttools.store" class="footer-link">Visit Website</a>
                    <span style="color: #d1d5db;">•</span>
                    <a href="https://www.bing.com/webmasters" class="footer-link">Bing Webmaster Tools</a>
                    <span style="color: #d1d5db;">•</span>
                    <a href="https://www.fasttools.store/contact" class="footer-link">Support</a>
                  </div>
                  <p class="footer-text">© 2025 FastTools.store • All rights reserved</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  },
  
  indexnow_failure: {
    subject: '❌ Microsoft Bing URL Submission - Failed',
    getHtml: (data: any) => `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; min-height: 100vh; }
            .email-container { max-width: 580px; margin: 40px auto; }
            .card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
            .brand-header { background: #ffffff; padding: 24px 32px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; }
            .logo { display: flex; align-items: center; gap: 12px; }
            .logo-icon { height: 36px; width: auto; }
            .logo-text { font-size: 18px; font-weight: 700; color: #111827; letter-spacing: -0.5px; }
            .badge { background: #ef4444; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; }
            .header { background: linear-gradient(135deg, #ef4444, #dc2626); color: white; padding: 32px; text-align: center; }
            .icon { font-size: 48px; margin-bottom: 12px; }
            .title { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
            .subtitle { margin: 8px 0 0 0; font-size: 14px; opacity: 0.9; font-weight: 400; }
            .content { padding: 32px; }
            .section-title { font-size: 13px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 16px 0; }
            .error-box { background: #fef2f2; border: 1px solid #fecaca; border-left: 4px solid #ef4444; padding: 16px; border-radius: 8px; margin: 0 0 24px 0; }
            .error-title { font-weight: 600; color: #991b1b; margin: 0 0 8px 0; font-size: 13px; display: flex; align-items: center; gap: 6px; }
            .error-msg { color: #7f1d1d; margin: 0; font-size: 13px; line-height: 1.5; }
            .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 0 0 24px 0; }
            .stat { background: linear-gradient(135deg, #fef2f2, #fee2e2); border: 1px solid #fecaca; padding: 20px; border-radius: 12px; text-align: center; }
            .stat-value { font-size: 32px; font-weight: 800; color: #dc2626; margin: 0; line-height: 1; }
            .stat-label { font-size: 11px; color: #991b1b; margin: 8px 0 0 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; }
            .info-box { background: #fffbeb; border: 1px solid #fde047; border-left: 4px solid #eab308; padding: 16px; border-radius: 8px; margin: 24px 0 0 0; }
            .info-row { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #713f12; margin: 0; }
            .info-icon { font-size: 16px; }
            .footer { padding: 24px 32px; background: #f9fafb; border-top: 1px solid #e5e7eb; }
            .footer-content { text-align: center; }
            .footer-title { font-size: 12px; font-weight: 600; color: #374151; margin: 0 0 8px 0; }
            .footer-links { display: flex; justify-content: center; gap: 16px; margin: 12px 0; }
            .footer-link { font-size: 11px; color: #6b7280; text-decoration: none; }
            .footer-link:hover { color: #111827; }
            .footer-text { font-size: 11px; color: #9ca3af; margin: 8px 0 0 0; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="card">
              <div class="brand-header">
                <div class="logo">
                  <img src="https://www.fasttools.store/logo.png" alt="FastTools" class="logo-icon" />
                  <span class="logo-text">FastTools</span>
                </div>
                <div class="badge">Failed</div>
              </div>
              <div class="header">
                <div class="icon">❌</div>
                <h1 class="title">Microsoft Bing URL Submission</h1>
                <p class="subtitle">URL submission to IndexNow API encountered an error</p>
              </div>
              <div class="content">
                <p class="section-title">⚠️ Error Report</p>
                <div class="error-box">
                  <p class="error-title">
                    <span>🔴</span>
                    <strong>Submission Failed</strong>
                  </p>
                  <p class="error-msg">${data.error}</p>
                </div>
                <p class="section-title">📊 Attempt Details</p>
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
                <div class="info-box">
                  <p class="info-row">
                    <span class="info-icon">🕐</span>
                    <strong>Attempted at:</strong> ${data.timestamp}
                  </p>
                </div>
              </div>
              <div class="footer">
                <div class="footer-content">
                  <p class="footer-title">FastTools Automated IndexNow Integration</p>
                  <div class="footer-links">
                    <a href="https://www.fasttools.store" class="footer-link">Visit Website</a>
                    <span style="color: #d1d5db;">•</span>
                    <a href="https://www.fasttools.store/api/indexnow" class="footer-link">Retry Submission</a>
                    <span style="color: #d1d5db;">•</span>
                    <a href="https://www.fasttools.store/contact" class="footer-link">Get Support</a>
                  </div>
                  <p class="footer-text">© 2025 FastTools.store • All rights reserved</p>
                </div>
              </div>
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
