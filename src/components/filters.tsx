import { useState } from 'react'

const MAX_SPENDING_VALUE = 99999

export default function Filters() {
  const [value, setValue] = useState(MAX_SPENDING_VALUE)

  return (
    <div className="filters">
      <div className="title">Filters</div>
      <div className="spending-filter">
        <div className="label">Spending</div>
        <input
          type="range"
          name="spending"
          id="spending"
          min={0}
          max={MAX_SPENDING_VALUE}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <div className="values">
          <span>${0}</span>
          <span>${value}</span>
        </div>
      </div>
    </div>
  )
}
