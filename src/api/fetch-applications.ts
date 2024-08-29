import { Application } from '../types/application.type'

export async function fetchApplications(): Promise<Application[]> {
  const res = await fetch('http://localhost:8080/data')
  const data = await res.json()
  return data
}
