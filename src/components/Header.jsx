import { Globe, LogIn, Menu } from 'lucide-react'
import { Container, Button, Tag } from './UI'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200/60">
      <Container className="flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-800" aria-hidden="true" />
          <div className="leading-tight">
            <p className="text-sm text-gray-500">Support4Resilience</p>
            <p className="font-semibold text-gray-900">Reflection & Education Tool</p>
          </div>
          <Tag className="hidden sm:inline-flex">EU Project</Tag>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#project" className="hover:text-gray-900">The Project</a>
          <a href="#who" className="hover:text-gray-900">Who We Are</a>
          <a href="#news" className="hover:text-gray-900">News</a>
          <a href="#calendar" className="hover:text-gray-900">Calendar</a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="subtle" className="gap-2">
            <Globe className="h-4 w-4" /> EN
          </Button>
          <Button variant="secondary" className="gap-2">
            <LogIn className="h-4 w-4" /> Log in
          </Button>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-gray-100">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </Container>
    </header>
  )
}
