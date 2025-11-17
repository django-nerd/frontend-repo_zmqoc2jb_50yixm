import { Container, Button, Card } from './UI'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(2,6,23,0.06),transparent_40%)]" aria-hidden="true" />
      <Container className="pt-14 pb-12 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Reflection & Education Tool (RET)
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-xl">
              Strengthening leadership and organisational resilience. A modern, guided learning experience built for teams across Europe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="px-5 py-3">Start the learning journey</Button>
              <Button variant="secondary" className="px-5 py-3">Explore modules</Button>
            </div>
          </div>
          <div>
            <Card className="p-6 sm:p-8">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 grid place-items-center ring-1 ring-black/5">
                <div className="text-center px-6">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 opacity-90 shadow-md" />
                  <p className="mt-4 text-slate-600 text-sm">
                    Neutral conceptual illustration placeholder
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
