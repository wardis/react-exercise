import { SetStateAction } from 'react'

export default function Filters({
  value,
  setValue,
  min,
  max,
}: {
  value: number
  setValue: React.Dispatch<SetStateAction<number>>
  min: number
  max: number
}) {
  return (
    <div className="filters">
      <div className="title">Filters</div>
      <div className="spending-filter">
        <div className="label">Spending</div>
        <input
          type="range"
          name="spending"
          id="spending"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(+e.target.value)}
        />
        <div className="values">
          <span>${min}</span>
          <span>${value}</span>
        </div>
      </div>
    </div>
  )
}
