import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'

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
    <>
      <h1>React Coding Exercise</h1>
      <ul>
        {applications.map((item) => (
          <li key={item.id}>
            {item.name} ${item.spend}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
