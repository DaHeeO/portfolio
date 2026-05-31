import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CursorGradient } from './components/CursorGradient'
import { SiteHeader } from './components/SiteHeader'

function App() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const frameId = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))

      target?.scrollIntoView()
    })

    return () => cancelAnimationFrame(frameId)
  }, [hash, pathname])

  return (
    <main className="relative overflow-hidden bg-white pt-20 text-[#19191d] max-md:pt-16">
      <CursorGradient />
      <SiteHeader />
      <div className="relative z-10">
        <Outlet />
      </div>
    </main>
  )
}

export default App
