import { catagory } from "../App"

interface FilterProp {
  onSelectCatagory: (catagory: string) => void
}

const FilterExpances = ({ onSelectCatagory }: FilterProp) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCatagory(event.target.value)}
    >
      <option value="">All catagories</option>
      {catagory.map((catagory) => (
        <option key={catagory} value={catagory}>
          {catagory}
        </option>
      ))}
    </select>
  )
}

export default FilterExpances
