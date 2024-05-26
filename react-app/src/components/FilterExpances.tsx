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
      <option value="Utility">Utility</option>
      <option value="Girosery">Girosery</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default FilterExpances
