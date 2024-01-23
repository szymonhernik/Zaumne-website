import { useEncodeDataAttribute } from '@sanity/react-loader'
import { CalendarListItem } from './CalendarListItem'
import ButtonCalendar from '@/components/shared/ButtonCalendar'

const Calendar = ({ calendar, encodeDataAttribute }) => {
  if (!calendar || calendar.length === 0) return null

  // Function to parse and sort the calendar data
  const sortedCalendar = calendar
    .map((item) => ({
      ...item,
      parsedDate: item.date.split('-').map(String), // [year, month, day]
    }))
    .sort((a, b) => {
      const [yearA, monthA] = a.parsedDate
      const [yearB, monthB] = b.parsedDate
      return yearB - yearA || monthB - monthA // Sort by year, then by month
    })

  // Grouping the sorted items by year and then by month
  const groupedByYearAndMonth = sortedCalendar.reduce((acc, item) => {
    const [year, month] = item.parsedDate
    acc[year] = acc[year] || {}
    acc[year][month] = acc[year][month] || []
    acc[year][month].push(item)
    return acc
  }, {})

  const yearsDescending = Object.keys(groupedByYearAndMonth).sort(
    (a, b) => b - a,
  )

  return (
    // return only 2 first elements CalendarListItem
    // on ButtonCalendar click show all the rest
    <div>
      {yearsDescending.map((year) => (
        <div key={year} className="mt-8 ">
          <p className="italic text-gray-500">{year}</p>
          {Object.keys(groupedByYearAndMonth[year])
            .sort((a, b) => b - a)
            .map((month) => (
              <div key={month} className="border-t-[1px] border-gray-500">
                {groupedByYearAndMonth[year][month].map((calendarItem, key) => (
                  <div
                    key={key}
                    data-sanity={encodeDataAttribute?.(['calendar', key])}
                  >
                    <CalendarListItem
                      calendarItem={calendarItem}
                      date={calendarItem.parsedDate}
                    />
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
      <ButtonCalendar />
    </div>
  )
}

export default Calendar
