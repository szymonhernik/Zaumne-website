import '@/styles/index.css'

import { toPlainText } from '@portabletext/react'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'

const VisualEditing = dynamic(() => import('@/sanity/loader/VisualEditing'))

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.aboutDescription
      ? toPlainText(homePage.aboutDescription)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="bg-white text-black">
        <div className="mt-20 px-4 ">
          <Suspense>{children}</Suspense>
        </div>
      </div>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  )
}
