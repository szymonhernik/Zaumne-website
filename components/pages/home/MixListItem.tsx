import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseMix } from '@/types'

interface MixProps {
  mix: ShowcaseMix
}

export function MixListItem(props: MixProps) {
  const { mix } = props

  return (
    <div>
      <div className="">{mix.title}</div>
      <div className="">{mix.date}</div>
      <a href={mix.link}>listen</a>
    </div>
  )
}
