import { useState } from 'react'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'

export default function NavigationItem({
  node,
  setBcap,
}: {
  node: NavigationItemType
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
        className="navigation-item"
        onClick={() => node.nodes?.length && setIsOpen(!isOpen)}
      >
        {isOpen ? <span>&#9206;</span> : <span>&#9207;</span>}
        <span onClick={() => setBcap(node.name)}>{node.name}</span>
      </div>
      <div className="list">
        {node.nodes &&
          node.nodes.length > 0 &&
          isOpen &&
          node.nodes.map((node) => (
            <NavigationItem node={node} key={node.name} setBcap={setBcap} />
          ))}
      </div>
    </div>
  )
}
