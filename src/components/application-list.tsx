import { Application } from '../types/application.type'
import { ApplicationItem } from './application-item'

export default function ApplicationList({
  applications,
}: {
  applications: Application[]
}) {
  return (
    <div className="application-list">
      {applications.map((item) => (
        <ApplicationItem key={item.id} {...item} />
      ))}
    </div>
  )
}
