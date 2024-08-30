import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'
import Navigation from './components/navigation'
import Filters from './components/filters'
import ApplicationList from './components/application-list'
import { MAX_SPENDING_VALUE } from './consts/max-spending'
import { navigationItems } from './consts/navigation-items'

function App() {
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState<string | null>(null)
  const [spending, setSpending] = useState(MAX_SPENDING_VALUE)
  const [bcap, setBcap] = useState('')

  const spendings = applications.map((application) => application.spend)
  const minSpend = Math.min(...spendings)
  const maxSpend = Math.max(...spendings)

  const filteredApplications = applications
    .filter(
      ({ BCAP1, BCAP2, BCAP3 }) => !bcap || [BCAP1, BCAP2, BCAP3].includes(bcap)
    )
    .filter((application) => application.spend <= spending)

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
        <Navigation navigationItems={navigationItems} setBcap={setBcap} />
        <Filters
          value={spending}
          setValue={setSpending}
          min={minSpend}
          max={maxSpend}
        />
      </div>
      <div className="container">
        <ApplicationList applications={filteredApplications} />
      </div>
    </div>
  )
}

export default App
