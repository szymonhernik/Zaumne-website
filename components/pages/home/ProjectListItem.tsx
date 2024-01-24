'use client'
import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'

interface ProjectProps {
  project: ShowcaseProject
  onToggleDisplay: (e: any) => void
}

export function ProjectListItem(props: ProjectProps) {
  const { project, onToggleDisplay } = props

  return (
    <div>
      <div className="" onClick={onToggleDisplay}>
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div>
      <BoopButton>
        <div
          className={`hover:cursor-pointer w-auto ${project.highlighted ? 'opacity-100' : 'opacity-70'}`}
        >
          {/* Title */}
          <div className="text-3xl w-auto italic	text-zaumne-bordo">
            {project.title}
          </div>
          <div className="text-[10px]	text-zaumne-bordo">({project.date})</div>

          {/* <CustomPortableText value={project.quote as PortableTextBlock[]} /> */}
        </div>
      </BoopButton>
    </div>
  )
}
