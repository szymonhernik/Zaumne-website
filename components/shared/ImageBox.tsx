import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  classesImage?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 800,
  height = 800,
  size = '(max-width:640px) 100vw, (max-width: 768px) 50vw, 33vw',
  classesWrapper,
  classesImage,
  ...props
}: ImageBoxProps) {
  // Assuming image.asset.url is the base URL you're starting with
  const imageUrl2 =
    image && image.asset.url && `${image.asset.url}?w=${width}&h=${height}`

  // Directly using LQIP provided by Sanity for blurDataURL
  const blurDataURL = image?.asset?.lqip

  return (
    <div className={`${classesWrapper}`} data-sanity={props['data-sanity']}>
      {imageUrl2 && (
        <Image
          className={`w-full  sm:max-w-[600px] ${classesImage}`}
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          quality={100}
          src={imageUrl2}
          placeholder="blur"
          blurDataURL={blurDataURL} // Use the extracted LQIP as the blurDataURL
        />
      )}
    </div>
  )
}
