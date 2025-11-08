import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // Read the embed HTML file
    const htmlPath = join(process.cwd(), 'public', 'embed-chatbot.html');
    const htmlContent = await readFile(htmlPath, 'utf-8');

    // Return HTML with proper headers
    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        'X-Frame-Options': 'ALLOW', // Allow embedding in iframes
      },
    });
  } catch (error) {
    console.error('Error serving embed widget:', error);
    return new NextResponse('Widget not found', { status: 404 });
  }
}
