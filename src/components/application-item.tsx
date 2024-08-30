import { Application } from '../types/application.type'

export const ApplicationItem = ({ name, spend }: Application) => {
  return (
    <div className="application">
      <h2 className="title">{name}</h2>
      <p className="description">Total spend: ${spend}</p>
    </div>
  )
}
