import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"

import List from "./components/List"
import FilterExpances from "./components/FilterExpances"

function App() {
  const [selectedCatagory, setSelectedCatagory] = useState("")
  const [expanses, setExpanses] = useState([
    { id: 1, description: "aaa", amount: 3, catagory: "Utility" },
    { id: 2, description: "bbb", amount: 3, catagory: "Utility" },
    { id: 3, description: "ccc", amount: 3, catagory: "Girosery" },
    { id: 4, description: "ddd", amount: 3, catagory: "Entertainment" },
  ])

  const VisibleExpenses = selectedCatagory
    ? expanses.filter((e) => e.catagory === selectedCatagory)
    : expanses

  return (
    <>
      <div className="mb-3">
        <FilterExpances
          onSelectCatagory={(catagory) => setSelectedCatagory(catagory)}
        />
      </div>
      <List
        expanses={VisibleExpenses}
        onDelete={(id) =>
          setExpanses(expanses.filter((item) => item.id !== id))
        }
      />
    </>
  )
}

export default App
