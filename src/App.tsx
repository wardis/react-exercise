import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'
import Navigation from './components/navigation'
import Filters from './components/filters'
import ApplicationList from './components/application-list'

function App() {
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchApplications()
        setApplications(data)
      } catch (error) {
        setError((error as Error).message)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="main">
      <div className="sidenav">
        <Navigation />
        <hr />
        <Filters />
      </div>
      <ApplicationList applications={applications} />
    </div>
  )
}

export default App
