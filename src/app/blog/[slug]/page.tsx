import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Zap, ArrowLeft, Tag, Clock, Share2 } from 'lucide-react';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '../data';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Pacific Pulse Blog',
    };
  }

  return {
    title: `${post.title} | Pacific Pulse Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // SECURITY NOTE: Content is safe because it comes from our hardcoded data.ts file,
  // not from user input or external sources. If you add dynamic content from users
  // or external APIs, use a sanitization library like DOMPurify.
  const formattedContent = formatContent(post.content);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-slate-900">Pacific Pulse</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/#services" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Services
              </Link>
              <Link href="/portfolio" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Portfolio
              </Link>
              <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm font-medium text-sky-600">
                Blog
              </Link>
            </div>
            <Link
              href="/apply"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-sky-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-sky-100 text-sky-700 text-sm font-medium rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-sm text-slate-500">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SH</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900">{post.author}</p>
              <p className="text-sm text-slate-500">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Share:</span>
            <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-sky-600 transition">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 pb-16">
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed
            prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900
            prose-ul:text-slate-600 prose-ol:text-slate-600
            prose-li:marker:text-sky-500
            prose-blockquote:border-l-sky-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
            prose-code:text-sky-600 prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-slate-900 prose-pre:text-slate-100
            prose-table:text-sm
            prose-th:bg-slate-100 prose-th:text-slate-900
            prose-td:border-slate-200"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-3 flex-wrap">
            <Tag className="w-5 h-5 text-slate-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-600 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sky-100 mb-8">
            Let&apos;s discuss how we can help you achieve similar results for your business.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition shadow-lg"
          >
            Start a Project
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-slate-500">{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>&copy; 2026 Pacific Pulse Growth Lab LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Helper function to convert markdown-like content to HTML
// NOTE: This is safe for hardcoded content. If you add user-generated content,
// use a proper markdown parser with sanitization (e.g., remark + rehype-sanitize)
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Wrap consecutive list items in ul/ol
    .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
      return `<ul>${match}</ul>`;
    })
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote><p>$1</p></blockquote>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Tables (simple support)
    .replace(/\|(.+)\|/g, (match, content) => {
      const cells = content.split('|').map((cell: string) => cell.trim());
      const isHeader = cells.some((cell: string) => cell.includes('---'));
      if (isHeader) return '';
      const tag = 'td';
      return `<tr>${cells.map((cell: string) => `<${tag}>${cell}</${tag}>`).join('')}</tr>`;
    })
    // Paragraphs (double newline)
    .replace(/\n\n/g, '</p><p>')
    // Single newlines within paragraphs
    .replace(/\n/g, '<br>')
    // Wrap in paragraphs
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<h') || match.startsWith('<ul') || match.startsWith('<ol') ||
          match.startsWith('<blockquote') || match.startsWith('<table') ||
          match.startsWith('<tr') || match.startsWith('<li') || match.trim() === '') {
        return match;
      }
      return `<p>${match}</p>`;
    })
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p><br><\/p>/g, '')
    // Fix nested paragraphs in blockquotes
    .replace(/<blockquote><p><p>/g, '<blockquote><p>')
    .replace(/<\/p><\/p><\/blockquote>/g, '</p></blockquote>');
}
