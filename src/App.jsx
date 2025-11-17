import Header from './components/Header'
import Hero from './components/Hero'
import AboutTool from './components/AboutTool'
import WhyResilience from './components/WhyResilience'
import Modules from './components/Modules'
import ToolsMethods from './components/ToolsMethods'
import Footer from './components/Footer'
import { Icons } from './components/ToolsMethods'

const ABOUT_TEXT = `This tool is structured into three main modules, each containing two sub-modules…`

const RESILIENCE_TEXT = `Strengthening Organisational Resilience – A Strategic Priority for Leadership…`

const MODULES = [
  {
    title: 'Supporting the Worker',
    description: 'Use the exact descriptions from the original content.'
  },
  {
    title: 'Improving Work Conditions',
    description: 'Use the exact descriptions from the original content.'
  },
  {
    title: 'Improving Work Culture',
    description: 'Use the exact descriptions from the original content.'
  }
]

const TOOLS = [
  { title: 'IGP Method for Inclusive Meetings', content: 'Full content from Useful Tools and Methods (1).' , icon: Icons.ListChecks},
  { title: 'Inspirational Example of How to Arrange a Workshop', content: 'Full content from Useful Tools and Methods (1).', icon: Icons.Boxes},
  { title: 'IGLO Method for Sorting Suggestions', content: 'Full content from Useful Tools and Methods (1).', icon: Icons.Lightbulb},
  { title: 'Activities for Mentors and Mentees', content: 'Full content from Useful Tools and Methods (1).', icon: Icons.Users},
  { title: 'Active Listening Checklist for Leaders', content: 'Full content from Useful Tools and Methods (1).', icon: Icons.Ear},
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <main>
        <Hero />
        <AboutTool text={ABOUT_TEXT} />
        <WhyResilience text={RESILIENCE_TEXT} />
        <Modules items={MODULES} />
        <ToolsMethods items={TOOLS} />
      </main>
      <Footer />
    </div>
  )
}
