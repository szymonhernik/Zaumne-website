import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface AboutProps {
  description?: any[]
}
export function About(props: AboutProps) {
  const { description } = props
  if (!description) {
    return null
  }
  return (
    <div>
      {description && (
        <div>
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}
