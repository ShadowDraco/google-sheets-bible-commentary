import React, { useContext, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import axios from "axios"
import { SheetContext } from "./App"
import Container from "react-bootstrap/esm/Container"

export default function AddForm() {
  const { setSheetData } = useContext(SheetContext)

  useEffect(() => {
    axios.post("https://bible-commentary.herokuapp.com/read").then(res => {
      console.log(res.data)
      setSheetData(res.data)
    })
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    axios
      .post("https://bible-commentary.herokuapp.com/", {
        time: new Date().toLocaleTimeString(),
        book: e.target[0].value,
        chapter: e.target[1].value,
        firstVerse: e.target[2].value,
        lastVerse: e.target[3].value,
        bookChapterVerses: `${e.target[0].value} ${e.target[1].value}:${e.target[2].value}-${e.target[3].value}`,
        name: e.target[4].value,
        commentary: e.target[5].value,
        source: e.target[6].value,
        interpretation: e.target[7].value,
      })
      .then(res => {
        setSheetData(res.data)
        console.log(res.data)
      })
  }

  return (
    <Container className="bg-gradient bg-gray mt-2 pt-2">
      <Form
        onSubmit={handleSubmit}
        className=" mt-5 flex flex-wrap flex-center"
      >
        <Form.Group className="mb-3" controlId="formBook">
          <Form.Label>Book</Form.Label>
          <Form.Control type="text" placeholder="Enter Book" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formChapter">
          <Form.Label>Chapter</Form.Label>
          <Form.Control type="text" placeholder="Enter Chapter" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstVerse">
          <Form.Label>First Verse</Form.Label>
          <Form.Control type="text" placeholder="Enter First Verse" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastVerse">
          <Form.Label>Last Verse</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Verse" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComentary">
          <Form.Label>Your Comentary</Form.Label>
          <Form.Control type="text" placeholder="Commentary" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSource">
          <Form.Label>Your Source</Form.Label>
          <Form.Control type="text" placeholder="resource" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInterpretation">
          <Form.Label>Your interpretation</Form.Label>
          <Form.Control type="text" placeholder="interpretation" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}
