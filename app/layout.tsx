import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Agnes Catherine Suico',
  description:
    'A professional developer portfolio by Agnes Catherine F. Suico, a CS undergrad majoring in Data Science and Full Stack Development.',
  generator: 'Next.js',
  openGraph: {
    title: 'Agnes Catherine Suico',
    description:
      'A professional developer portfolio by Agnes Catherine F. Suico, a CS undergrad majoring in Data Science and Full Stack Development.',
    type: 'website',
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth dark"
    >
      <body className={`${inter.className} font-sans antialiased bg-neutral-950 text-neutral-200 overflow-x-hidden selection:bg-purple-600/30`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
