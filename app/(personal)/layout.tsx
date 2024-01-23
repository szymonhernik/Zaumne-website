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
    title: homePage?.home?.title
      ? {
          template: `%s | ${homePage.home.title}`,
          default: homePage.home.title || 'Personal website',
        }
      : undefined,
    description: homePage?.home?.aboutDescription
      ? toPlainText(homePage.home.aboutDescription)
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
      <div className=" text-black ">
        <div className="">
          <Suspense>{children}</Suspense>
        </div>
      </div>
      {draftMode().isEnabled && <VisualEditing />}
    </>
  )
}
