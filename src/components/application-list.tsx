import { Application } from '../types/application.type'
import { ApplicationItem } from './application-item'

type ApplicationListProps = {
  applications: Application[]
}

export default function ApplicationList({
  applications,
}: ApplicationListProps) {
  return (
    <div className="application-list">
      {applications.map((item) => (
        <ApplicationItem key={item.id} {...item} />
      ))}
    </div>
  )
}
