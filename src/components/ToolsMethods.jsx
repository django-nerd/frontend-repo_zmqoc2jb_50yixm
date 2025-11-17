import { Accordion, Card, Container } from './UI'
import { ListChecks, Lightbulb, Boxes, Users, Ear } from 'lucide-react'

export default function ToolsMethods({ items }) {
  const enhanced = items.map(item => ({
    ...item,
    icon: item.icon || Lightbulb
  }))

  return (
    <section className="py-8 sm:py-16">
      <Container>
        <Card className="overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Useful tools and methods</h2>
            <p className="mt-2 text-gray-600">Practical frameworks and templates to support learning and reflection.</p>
          </div>
          <div className="p-0">
            <Accordion items={enhanced} />
          </div>
        </Card>
      </Container>
    </section>
  )
}

export const Icons = { ListChecks, Lightbulb, Boxes, Users, Ear }
