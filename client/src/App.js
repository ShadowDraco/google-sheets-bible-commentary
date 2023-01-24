import { useState, createContext } from "react"

import AddForm from "./AddForm"
import SheetDisplay from "./SheetDisplay"
import "./App.css"

import Container from "react-bootstrap/Container"

export const SheetContext = createContext()

function App() {
  const [sheetData, setSheetData] = useState()

  return (
    <SheetContext.Provider value={{ sheetData, setSheetData }}>
      <Container
        fluid
        className="App bg-gradient bg-secondary text-light m-0 p-0"
      >
        <h1 className="text-center pt-5"> Bible - Commentary ! </h1>
        <SheetDisplay />
        <AddForm />
      </Container>
    </SheetContext.Provider>
  )
}

export default App
