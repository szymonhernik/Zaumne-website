import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 800,
  height = 800,
  size = '(max-width:640px) 100vw, (max-width: 768px) 50vw, 33vw',
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl =
    image && urlForImage(image)?.height(height).width(width).url()

  return (
    <div className={`${classesWrapper}`} data-sanity={props['data-sanity']}>
      {imageUrl && (
        <Image
          className="w-full h-auto sm:max-w-[600px]"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          quality={100}
          src={imageUrl}
        />
      )}
    </div>
  )
}
