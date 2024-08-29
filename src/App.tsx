import { useEffect, useState } from 'react'
import './App.css'
import { fetchApplications } from './api/fetch-applications'
import { Application } from './types/application.type'

function App() {
  const [applications, setApplications] = useState<Application[]>([])
  useEffect(() => {
    fetchApplications().then((data) => setApplications(data))
  }, [])

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
