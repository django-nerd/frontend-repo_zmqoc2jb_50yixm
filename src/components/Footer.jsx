import { Container } from './UI'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200/70 bg-white">
      <Container className="py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-800" aria-hidden="true" />
              <div className="leading-tight">
                <p className="text-sm text-gray-500">Support4Resilience</p>
                <p className="font-semibold text-gray-900">Reflection & Education Tool</p>
              </div>
            </div>
            <p className="mt-4 max-w-prose">Funded by the European Union. Views and opinions expressed are however those of the author(s) only.</p>
          </div>
          <div>
            <p className="font-medium text-gray-900">Legal</p>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Partners</p>
            <div className="mt-3 flex gap-4 items-center opacity-80">
              <div className="h-8 w-20 bg-gray-100 rounded" />
              <div className="h-8 w-20 bg-gray-100 rounded" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">Horizon Europe · Health Programme</div>
      </Container>
    </footer>
  )
}
