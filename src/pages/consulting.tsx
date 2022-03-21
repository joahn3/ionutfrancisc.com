import Hero from 'components/Hero'
import InstructionOverview from 'sections/InstructionOverview'
import InstructionOfferings from 'sections/InstructionOfferings'
import InstructionPricing from 'sections/InstructionPricing'
import InstructionForm from 'sections/InstructionForm'
import Page from 'components/Page'

const seo = {
  title: 'Consulting',
  description:
    'Schedule a pair consulting session with Ionut Francisc and learn modern web development.',
}

const heroProps = {
  heading: 'Schedule a personalized pair consulting session.',
  paragraph:
    'I offer pair consulting sessions for start-up & business managers to help sharpen their skills with modern frontend tools and frameworks. Ask questions as you work alongside a living breathing person.',
}

export default function Instruction() {
  return (
    <Page {...seo}>
      <Hero {...heroProps} />
      <InstructionOverview />
      <InstructionOfferings />
      <InstructionPricing />
      <InstructionForm />
    </Page>
  )
}
