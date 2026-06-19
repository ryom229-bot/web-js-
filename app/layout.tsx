import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Shippori_Mincho } from 'next/font/google'
import './globals.css'

const notoSansJp = Noto_Sans_JP({
  variable: '--font-sans-jp',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const shipporiMincho = Shippori_Mincho({
  variable: '--font-mincho',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: '木ノ実建設 | 自然素材でつくる、家族のための注文住宅',
  description:
    '木のぬくもりと自然素材にこだわった、家族のための注文住宅。施工事例、商品ラインナップ、資料請求はこちらから。無料の資料請求・お問い合わせを受付中です。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${shipporiMincho.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
