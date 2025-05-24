import './App.css'
import Portfolio from './Portfolio'
import { Analytics } from "@vercel/analytics/react" // Import Analytics for Vercel

function App() {
  return (
    <>
      <Analytics />
      <Portfolio />
    </>
  )
}

export default App
