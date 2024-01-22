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
    <div className="flex items-center  ">
      <p className="mr-2 text-base">
        {mix.title} ({mix.date})
      </p>
      <a className="text-xs underline text-zaumne-blue" href={mix.link}>
        listen
      </a>
    </div>
  )
}
