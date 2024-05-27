import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react"

import List from "./components/List"
import FilterExpances from "./components/FilterExpances"
import FormExpense from "./components/FormExpense"
// import catagory from "./catagories"

function App() {
  const [selectedCatagory, setSelectedCatagory] = useState("")
  const [expanses, setExpanses] = useState([
    { id: 1, description: "Bill", amount: 30, catagory: "Utility" },
    { id: 2, description: "Fruites", amount: 20, catagory: "Girosery" },
    { id: 4, description: "Cinema", amount: 10, catagory: "Entertainment" },
  ])

  const VisibleExpenses = selectedCatagory
    ? expanses.filter((e) => e.catagory === selectedCatagory)
    : expanses

  return (
    <>
      <div className="mb-5">
        <FormExpense
          onsubmit={(expanse) =>
            setExpanses([...expanses, { ...expanse, id: expanses.length + 1 }])
          }
        />
      </div>
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
