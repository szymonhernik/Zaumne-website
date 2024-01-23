import 'tailwindcss/tailwind.css'

import { IBM_Plex_Mono, Inter, PT_Serif } from 'next/font/google'
import localFont from 'next/font/local'

const c059 = localFont({
  src: [
    {
      path: './C059-Roman.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './C059-Italic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './C059-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './C059-BdIta.woff',
      weight: '700',
      style: 'italic',
    },
  ],
})

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${c059.className} m-0 p-0 box-border scroll-smooth	`}
    >
      <body>{children}</body>
    </html>
  )
}
