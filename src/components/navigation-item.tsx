import { SetStateAction, useState } from 'react'
import { NavigationItem as NavigationItemType } from '../types/navigation.type'

export default function NavigationItem({
  node,
  bcap,
  setBcap,
}: {
  node: NavigationItemType
  bcap: string
  setBcap: React.Dispatch<SetStateAction<string>>
}) {
  const [isOpen, setIsOpen] = useState(false)
  const isActive = bcap === node.name

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
        <div className="name" onClick={() => setBcap(node.name)}>
          {node.name}
        </div>
      </div>
      <div className="list">
        {node.nodes &&
          node.nodes.length > 0 &&
          isOpen &&
          node.nodes.map((node) => (
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
