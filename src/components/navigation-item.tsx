import { useState } from 'react'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'
import { useNavigation } from '../contexts/navigation'

export default function NavigationItem({ node }: { node: NavigationItemType }) {
  const [isOpen, setIsOpen] = useState(false)
  const { selected, setSelected } = useNavigation()
  const isActive = selected === node.name

  return (
    <div>
      <div className={`navigation-item ${isActive && 'active'}`}>
        {node.nodes ? (
          <span onClick={() => node.nodes?.length && setIsOpen(!isOpen)}>
            {isOpen ? <span>&#9206;</span> : <span>&#9207;</span>}
          </span>
        ) : (
          <span />
        )}
        <div className="name" onClick={() => setSelected(node.name)}>
          {node.name}
        </div>
      </div>
      <div className="list">
        {node.nodes &&
          node.nodes.length > 0 &&
          isOpen &&
          node.nodes.map((node) => (
            <NavigationItem node={node} key={node.name} />
          ))}
      </div>
    </div>
  )
}
