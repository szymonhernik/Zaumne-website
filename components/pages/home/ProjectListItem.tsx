import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'

interface ProjectProps {
  project: ShowcaseProject
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div>
      <div className="">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div>
      <div className={`${project.highlighted ? 'opacity-100' : 'opacity-70'}`}>
        {/* Title */}
        <div className="text-3xl italic	text-zaumne-bordo">{project.title}</div>
        <div className="text-[10px]	text-zaumne-bordo">({project.date})</div>
        {/* <CustomPortableText value={project.quote as PortableTextBlock[]} /> */}
      </div>
    </div>
  )
}
