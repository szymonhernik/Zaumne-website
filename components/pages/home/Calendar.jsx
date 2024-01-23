'use client'
import { useState } from 'react'

const sortAndGroupEvents = (events, showAll = false) => {
  // Sort events by date in descending order
  const sortedEvents = events.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  // Limit events to two if showAll is false
  const limitedEvents = showAll ? sortedEvents : sortedEvents.slice(0, 2)

  // Group events by year and then by month
  const groupEvents = (eventsToGroup) => {
    console.log(eventsToGroup)
    return eventsToGroup.reduce((acc, event) => {
      const year = new Date(event.date).getFullYear()
      const month = new Date(event.date).toLocaleString('default', {
        month: 'long',
      })
      if (!acc[year]) {
        acc[year] = {}
      }
      if (!acc[year][month]) {
        acc[year][month] = []
      }
      acc[year][month].push(event)
      return acc
    }, {})
  }

  return groupEvents(limitedEvents)
}

export default function Calendar({ calendar }) {
  const [showAll, setShowAll] = useState(false)
  const groupedEvents = sortAndGroupEvents(calendar, showAll)

  const renderEvents = (events) => {
    // If showAll is false, slice the array to show only two latest events

    return events.map((event, index) => {
      const parsedDate = event.date.split('-').map(String) //[year, month, day]
      return (
        <div key={index} className="my-4 text-xs flex w-full ">
          <p className="text-zaumne-pink w-24 min-w-24">
            {parsedDate[2]}.{parsedDate[1]}
          </p>
          <div>
            <p className="uppercase">{event.title}</p>
            <p className="text-zaumne-blue">({event.city})</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {Object.keys(groupedEvents)
        .map((year) => (
          <div key={year} className="mt-8 ">
            <h2 className="italic text-gray-500">{year}</h2>
            {Object.keys(groupedEvents[year]).map((month) => (
              <div key={month} className="border-t-[1px] border-gray-500">
                {renderEvents(groupedEvents[year][month])}
              </div>
            ))}
          </div>
        ))
        .reverse()}
      <div className="border-t-[1px] border-gray-500 p-4">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show Archive'}
        </button>
      </div>
    </div>
  )
}
