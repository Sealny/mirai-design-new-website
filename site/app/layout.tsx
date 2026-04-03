import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from '@/lib/i18n/context'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mirai Design — Fast websites that convert.',
  description:
    'WaaS (Website-as-a-Service) for European B2B companies. Fast delivery, subscription model, conversion-focused design. Based in Tallinn, Estonia.',
  keywords: [
    'web design',
    'WaaS',
    'website subscription',
    'B2B web design',
    'Tallinn',
    'Estonia',
    'conversion design',
  ],
  authors: [{ name: 'MiraiWorks OÜ', url: 'https://miraidesign.studio' }],
  creator: 'MiraiWorks OÜ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://miraidesign.studio',
    title: 'Mirai Design — Fast websites that convert.',
    description:
      'WaaS for European B2B companies. Fast, conversion-focused websites on a subscription model.',
    siteName: 'Mirai Design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mirai Design — Fast websites that convert.',
    description:
      'WaaS for European B2B companies. Fast, conversion-focused websites on a subscription model.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
