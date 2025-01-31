import Text from 'components/Text'

interface Props {
  heading: string
  subheading: string
}

export default function Intro(props: Props) {
  return (
    <div className="md:text-center">
      <Text
        tag="h2"
        className="text-3xl leading-tight font-extrabold sm:text-4xl"
        content={props.heading}
      />
      <Text
        tag="p"
        className="text-gray-700 mt-1 italic sm:text-lg"
        content={props.subheading}
      />
    </div>
  )
}
