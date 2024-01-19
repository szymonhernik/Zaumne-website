import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseWork } from '@/types'

interface WorkProps {
  work: ShowcaseWork
}

export function WorkListItem(props: WorkProps) {
  const { work } = props

  return (
    <div>
      <div className="">
        <TextBox work={work} />
      </div>
    </div>
  )
}

function TextBox({ work }: { work: ShowcaseWork }) {
  return (
    <div>
      <div>
        {/* Title */}
        <div>{work.title}</div>
      </div>
    </div>
  )
}
