import 'tailwindcss/tailwind.css'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${c059.className} m-0 p-0 box-border scroll-smooth	snap-y snap-proximity`}
    >
      <body>{children}</body>
    </html>
  )
}
