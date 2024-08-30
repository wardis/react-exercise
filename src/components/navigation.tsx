import { SetStateAction } from 'react'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'
import NavigationItem from './navigation-item'

export default function Navigation({
  navigationItems,
  bcap,
  setBcap,
  reset,
}: {
  navigationItems: NavigationItemType[]
  bcap: string
  setBcap: React.Dispatch<SetStateAction<string>>
  reset: () => void
}) {
  return (
    <div className="navigation">
      <div className="title">
        <span>Navigation</span>
        {bcap && <button onClick={reset}>Reset</button>}
      </div>
      <div>
        {navigationItems.map((node) => (
          <NavigationItem
            node={node}
            key={node.name}
            setBcap={setBcap}
            bcap={bcap}
          />
        ))}
      </div>
    </div>
  )
}
