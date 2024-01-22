import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { CalendarData } from '@/types'

interface CalendarProps {
  calendarItem: CalendarData
}

export function CalendarListItem(props: CalendarProps) {
  const { calendarItem } = props

  return (
    <div>
      <div className="">
        <TextBox calendarItem={calendarItem} />
      </div>
    </div>
  )
}

function TextBox({ calendarItem }: { calendarItem: CalendarData }) {
  return <div>{calendarItem.city}</div>
}
