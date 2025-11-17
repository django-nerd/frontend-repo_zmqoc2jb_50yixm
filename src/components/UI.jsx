import { cn } from '../utils/cn'
import { ChevronDown } from 'lucide-react'

export function Container({ className = '', children }) {
  return (
    <div className={cn('w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  )
}

export function Card({ className = '', children }) {
  return (
    <div className={cn('bg-white/90 backdrop-blur shadow-sm ring-1 ring-black/5 rounded-2xl', className)}>
      {children}
    </div>
  )
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600',
    secondary: 'bg-white text-blue-600 ring-1 ring-blue-200 hover:bg-blue-50 focus:ring-blue-600',
    subtle: 'bg-transparent text-blue-700 hover:bg-blue-50 focus:ring-blue-600'
  }
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function Tag({ children, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-700 px-2 py-1 text-xs font-medium ring-1 ring-blue-200', className)}>
      {children}
    </span>
  )
}

export function Accordion({ items }) {
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, idx) => (
        <AccordionItem key={idx} title={item.title} content={item.content} icon={item.icon} />
      ))}
    </div>
  )
}

function AccordionItem({ title, content, icon: Icon }) {
  return (
    <details className="group">
      <summary className="flex list-none items-center gap-3 cursor-pointer select-none py-4 px-4 sm:px-6 hover:bg-gray-50/80 transition-colors">
        {Icon ? <Icon className="h-5 w-5 text-blue-600" /> : null}
        <span className="text-gray-900 font-medium flex-1">{title}</span>
        <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-4 sm:px-6 pb-5 text-gray-700 leading-relaxed">
        {typeof content === 'string' ? <p className="whitespace-pre-line">{content}</p> : content}
      </div>
    </details>
  )
}
