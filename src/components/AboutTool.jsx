import { Card, Container } from './UI'
import { Layers, ListChecks } from 'lucide-react'

export default function AboutTool({ text }) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Card className="p-6 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 grid place-items-center ring-1 ring-blue-200">
              <Layers className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">About the tool</h2>
              <p className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">{text}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 ring-1 ring-gray-200"><ListChecks className="h-4 w-4 text-blue-600"/> Modules</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 ring-1 ring-gray-200"><ListChecks className="h-4 w-4 text-blue-600"/> Sub-modules</span>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
