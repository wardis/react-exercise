import { useNavigation } from '../contexts/navigation'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'
import NavigationItem from './navigation-item'

export default function Navigation({
  navigationItems,
  reset,
}: {
  navigationItems: NavigationItemType[]
  reset: () => void
}) {
  const { selected } = useNavigation()

  return (
    <div className="navigation">
      <div className="title">
        <span>Navigation</span>
        {selected && <button onClick={reset}>Reset</button>}
      </div>
      <div>
        {navigationItems.map((node) => (
          <NavigationItem node={node} key={node.name} />
        ))}
      </div>
    </div>
  )
}
