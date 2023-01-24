import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import { SheetContext } from "./App"
import SheetRow from "./SheetRow"

export default function SheetDisplay() {
  const { sheetData } = useContext(SheetContext)

  return (
    <Container fluid className="mt-5 -grid">
      {sheetData?.values.map((row, i) => {
        return <SheetRow key={`${row[0]} ${i}`} row={row} />
      })}
    </Container>
  )
}
