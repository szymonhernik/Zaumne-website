import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { CalendarData } from '@/types'

interface CalendarProps {
  calendarItem: CalendarData
  date: String[]
}

export function CalendarListItem(props: CalendarProps) {
  const { calendarItem, date } = props
  console.log(date)
  // ['2023','02','14']

  return (
    <div>
      <div className="">
        <TextBox
          calendarItem={calendarItem}
          day={date[2]}
          month={date[1]}
          year={date[0]}
        />
      </div>
    </div>
  )
}

function TextBox({
  calendarItem,
  day,
  month,
  year,
}: {
  calendarItem: CalendarData
  day: String
  month: String
  year: String
}) {
  return (
    <div className="my-4 text-xs flex w-full ">
      <p className="text-zaumne-pink w-24 min-w-24">
        {day}.{month}
      </p>
      <div>
        <p className="uppercase">{calendarItem.title}</p>
        <p className="text-zaumne-blue">({calendarItem.city})</p>
      </div>
    </div>
  )
}
