import { NavigationItem as NavigationItemType } from '../types/navigation.type'
import NavigationItem from './navigation-item'

export default function Navigation({
  navigationItems,
  setBcap,
}: {
  navigationItems: NavigationItemType[]
}) {
  return (
    <div className="navigation">
      <p>Navigation</p>
      <div>
        {navigationItems.map((node) => (
          <NavigationItem node={node} key={node.name} setBcap={setBcap} />
        ))}
      </div>
    </div>
  )
}
