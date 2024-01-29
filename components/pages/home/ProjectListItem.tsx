'use client'
import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProject } from '@/types'
import Image from 'next/image'
import { useState } from 'react'
import BoopButton from '@/components/shared/BoopButton'
import styles from './styles.module.css'

interface ProjectProps {
  project: ShowcaseProject
  onClick: () => void
  isActive: boolean
  isInside?: boolean

  transformXValue: Number
}

export function ProjectListItem(props: ProjectProps) {
  const { project, onClick, isActive, transformXValue, isInside } = props

  return (
    <div
      className={`titles big-tablet:will-change-transform ${styles.titles} big-tablet:text-right`}
      style={{
        transform: `translateX(${transformXValue}px)`, // Apply the transform here
        transition: 'transform 0.3s', // Optional: Adds smooth transition for the transform
      }}
    >
      <BoopButton>
        <div
          className={`w-auto big-tablet:flex big-tablet:justify-end big-tablet:gap-2 
          ${
            isActive
              ? 'hover:cursor-default !opacity-100'
              : 'hover:cursor-pointer'
          }
          ${isInside ? 'opacity-20' : project.highlighted ? 'opacity-100' : 'opacity-70'}

          `}
          onClick={!isActive ? onClick : undefined} // Apply onClick here
        >
          {/* Title */}
          <div className="text-3xl big-tablet:text-[2.5rem] 2xl:text-[2.5vw] 2xl:leading-[2.5vw] w-auto italic	text-zaumne-bordo">
            {project.title}
          </div>
          <div className="text-[10px] big-tablet:mt-[-5px] big-tablet:text-base	text-zaumne-bordo">
            ({project.date})
          </div>

          {/* <CustomPortableText value={project.quote as PortableTextBlock[]} /> */}
        </div>
      </BoopButton>
    </div>
  )
}
