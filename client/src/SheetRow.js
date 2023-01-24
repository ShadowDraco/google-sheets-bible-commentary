import React, { useContext, useState } from "react"
import Container from "react-bootstrap/Container"
import { SheetContext } from "./App"

export default function SheetRow(props) {
  const { sheetData } = useContext(SheetContext)
  const row = props.row
  return (
    <Container fluid className="-row">
      {row?.map((col, i) => {
        return (
          <Container key={`${col} ${i}`} className="-col">
            {col}
          </Container>
        )
      })}
    </Container>
  )
}
