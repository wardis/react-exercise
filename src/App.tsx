import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'
import Navigation from './components/navigation'
import Filters from './components/filters'
import ApplicationList from './components/application-list'

// Harcoded values for now.
const navigationItems = [
  {
    name: 'Business Capability 1',
    nodes: [
      {
        name: 'Business Capability 1.1',
        nodes: [
          { name: 'Business Capability 1.1.1' },
          { name: 'Business Capability 1.1.2' },
          { name: 'Business Capability 1.1.3' },
        ],
      },
    ],
  },
  {
    name: 'Business Capability 2',
    nodes: [
      {
        name: 'Business Capability 2.1',
        nodes: [
          { name: 'Business Capability 2.1.1' },
          { name: 'Business Capability 2.1.2' },
          { name: 'Business Capability 2.1.3' },
        ],
      },
      {
        name: 'Business Capability 2.2',
        nodes: [{ name: 'Business Capability 2.2.1' }],
      },
    ],
  },
  {
    name: 'Business Capability 3',
    nodes: [
      {
        name: 'Business Capability 3.1',
        nodes: [{ name: 'Business Capability 3.1.1' }],
      },
      {
        name: 'Business Capability 3.2',
        nodes: [
          { name: 'Business Capability 3.2.1' },
          { name: 'Business Capability 3.2.2' },
          { name: 'Business Capability 3.2.3' },
        ],
      },
    ],
  },
]

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
        <Navigation navigationItems={navigationItems} />
        <Filters />
      </div>
      <div className="container">
        <ApplicationList applications={applications} />
      </div>
    </div>
  )
}

export default App
