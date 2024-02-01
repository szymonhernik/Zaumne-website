import type { PortableTextBlock } from '@portabletext/types'
import BoopButton from '@/components/shared/BoopButton'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseWork } from '@/types'

interface WorkProps {
  work: ShowcaseWork
  handleClick: () => void
}

export function WorkListItem(props: WorkProps) {
  const { work, handleClick } = props

  return (
    <div>
      <div className="">
        <TextBox work={work} handleClick={handleClick} />
      </div>
    </div>
  )
}

function TextBox({
  work,
  handleClick,
}: {
  work: ShowcaseWork
  handleClick: () => void
}) {
  return (
    <div>
      <div>
        {/* Title */}
        <div
          className={`italic text-zaumne-blue  ${work.highlighted ? 'opacity-100' : 'opacity-60'}`}
        >
          {work.link ? (
            <BoopButton>
              <a target="_blank" href={work.link} className="hover:underline">
                {work.title}
              </a>
            </BoopButton>
          ) : (
            <>{work.title}</>
          )}
        </div>
        {work.workDetails && <CustomPortableText value={work.workDetails} />}
        {work.highlighted == true && (
          <BoopButton>
            <div
              className="underline hover:cursor-pointer"
              onClick={handleClick}
            >
              more
            </div>
          </BoopButton>
        )}
      </div>
    </div>
  )
}
