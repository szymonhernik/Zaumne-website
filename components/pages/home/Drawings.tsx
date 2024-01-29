import Image from 'next/image'

export default function Drawings() {
  return (
    <div className="hidden big-tablet:block absolute w-full h-full z-[-1]">
      <div className="absolute bottom-0 left-[55vw]">
        <Image
          src="/Layer-3.jpg"
          width={200}
          height={200}
          alt="Decorative doodle by szyneczka"
        />
      </div>
      <div className="absolute top-0 right-[10vw]">
        <Image
          src="/Layer-5.jpg"
          width={300}
          height={200}
          alt="Decorative doodle by szyneczka"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          src="/Layer-6.jpg"
          width={220}
          height={200}
          alt="Decorative doodle by szyneczka"
        />
      </div>
    </div>
  )
}
