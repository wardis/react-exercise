import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'
import Navigation from './components/navigation'
import Filters from './components/filters'
import ApplicationList from './components/application-list'
import { MAX_SPENDING_VALUE } from './consts/max-spending'
import { getNavigationItems } from './utils/get-navigation-items'

/**
 * In Navigation:
 * - filter by business capability by clicking on the name.
 * - expand by clicking arrows next to name.
 * - a reset buttons appears and allow to reset business capability filter.
 */

function App() {
  const [applications, setApplications] = useState<Application[]>([])
  const [error, setError] = useState<string | null>(null)
  const [spending, setSpending] = useState(MAX_SPENDING_VALUE)
  const [bcap, setBcap] = useState('')

  const navigationItems = getNavigationItems(applications)

  const applicationsFilteredByBcap = applications.filter(
    ({ BCAP1, BCAP2, BCAP3 }) => !bcap || [BCAP1, BCAP2, BCAP3].includes(bcap)
  )
  const spendings = applicationsFilteredByBcap.map(
    (application) => application.spend
  )
  const filteredApplications = applicationsFilteredByBcap.filter(
    (application) => application.spend <= spending
  )

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

  useEffect(() => {
    applications.length && setSpending(Math.max(...spendings))
  }, [bcap])

  function handleReset() {
    setBcap('')
    setSpending(MAX_SPENDING_VALUE)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="main">
      <div className="sidenav">
        <Navigation
          navigationItems={navigationItems}
          setBcap={setBcap}
          bcap={bcap}
          reset={handleReset}
        />
        <Filters
          value={spending}
          setValue={setSpending}
          min={Math.min(...spendings)}
          max={Math.max(spending, ...spendings)}
        />
      </div>
      <div className="container">
        <ApplicationList applications={filteredApplications} />
      </div>
    </div>
  )
}

export default App
