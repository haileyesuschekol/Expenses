import { useState } from "react"
import FormInput from "./components/FormInput"
import List from "./components/List"

function App() {
  const [expanses, setExpanses] = useState([
    { id: 1, description: "aaa", amount: 3, catagory: "utiltity" },
    { id: 2, description: "bbb", amount: 3, catagory: "utiltity" },
    { id: 3, description: "ccc", amount: 3, catagory: "utiltity" },
    { id: 4, description: "ddd", amount: 3, catagory: "utiltity" },
  ])
  return (
    <>
      <FormInput />
      <List
        expanses={expanses}
        onDelete={(id) =>
          setExpanses(expanses.filter((item) => item.id !== id))
        }
      />
    </>
  )
}

export default App
