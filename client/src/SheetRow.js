import React, { useContext } from "react"
import Container from "react-bootstrap/Container"
import { SheetContext } from "./App"

export default function SheetRow(props) {
  return (
    <Container fluid className="-row">
      {props.row?.map((col, i) => {
        return (
          <Container key={`${col} ${i}`} className="-col">
            {col}
          </Container>
        )
      })}
    </Container>
  )
}
