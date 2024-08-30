import { useState } from 'react'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'

export default function NavigationItem({ node }: { node: NavigationItemType }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
        className="navigation-item"
        onClick={() => node.nodes?.length && setIsOpen(!isOpen)}
      >
        {isOpen ? <span>&#9206;</span> : <span>&#9207;</span>}
        <span>{node.name}</span>
      </div>
      <div style={{ paddingLeft: '1rem' }}>
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
