import { Container, Card, Button } from './UI'
import { BookOpen, CheckCircle2 } from 'lucide-react'

function ModuleCard({ title, description }) {
  return (
    <Card className="p-6 sm:p-8 flex flex-col">
      <div className="flex items-start gap-5">
        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 opacity-90 shadow-md" aria-hidden="true" />
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="h-4 w-4 text-gray-400" /> 0% completed
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Button className="px-4 py-2">
          <BookOpen className="h-4 w-4 mr-2" /> Go to module
        </Button>
      </div>
    </Card>
  )
}

export default function Modules({ items }) {
  return (
    <section className="py-8 sm:py-16">
      <Container>
        <div className="mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">All modules</h2>
          <p className="mt-2 text-gray-600">Three guided learning modules. Start where it helps most.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m, i) => (
            <ModuleCard key={i} title={m.title} description={m.description} />
          ))}
        </div>
      </Container>
    </section>
  )
}
