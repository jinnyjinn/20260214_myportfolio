import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Job Navigator - Career Roadmap Platform',
  description: 'A modern career management platform for vocational high school students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-indigo-600">🎯 Job Navigator</h1>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white mt-20 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2026 Job Navigator. Built for your career success.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
