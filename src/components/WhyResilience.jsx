import { Card, Container } from './UI'

export default function WhyResilience({ text }) {
  return (
    <section className="py-8 sm:py-16">
      <Container>
        <Card className="p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Why organisational resilience matters</h2>
              <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                {text}
              </div>
            </div>
            <div className="p-6 sm:p-10 bg-gradient-to-b from-slate-50 to-white border-l border-gray-100">
              <div className="aspect-[4/3] rounded-xl bg-white grid place-items-center ring-1 ring-black/5">
                <div className="mx-auto h-24 w-24 rounded-xl border border-dashed border-slate-300" />
                <p className="mt-4 text-slate-500 text-sm">Neutral illustration placeholder</p>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Clarity for leaders and teams</li>
                <li>Evidence-informed guidance</li>
                <li>Actionable, practical tools</li>
              </ul>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  )
}
