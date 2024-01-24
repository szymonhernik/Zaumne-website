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
  onClick: () => void
  isActive: boolean
}

export function ProjectListItem(props: ProjectProps) {
  const { project, onClick, isActive } = props

  console.log(isActive)
  return (
    <div>
      <BoopButton>
        <div
          className={`w-auto ${
            isActive ? 'hover:cursor-default' : 'hover:cursor-pointer'
          } ${project.highlighted ? 'opacity-100' : 'opacity-70'}`}
          onClick={!isActive ? onClick : undefined} // Apply onClick here
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
