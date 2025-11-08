import { readFile } from 'fs/promises';
import { join } from 'path';

export default async function EmbedPage() {
  // Read the embed HTML file
  const htmlPath = join(process.cwd(), 'public', 'embed-chatbot.html');
  const htmlContent = await readFile(htmlPath, 'utf-8');

  // Return the HTML content directly
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

// Metadata
export const metadata = {
  title: 'Pacific Pulse AI Chatbot - Embed',
  robots: 'noindex',
};
