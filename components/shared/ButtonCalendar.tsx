'use client'
export default function ButtonCalendar() {
  function showMoreCalendarItems() {
    console.log('clicked')
  }
  return (
    <div
      className="border-t-[1px] border-gray-500 p-4 cursor-pointer"
      onClick={showMoreCalendarItems}
    >
      <p className="italic">show archive</p>
    </div>
  )
}
