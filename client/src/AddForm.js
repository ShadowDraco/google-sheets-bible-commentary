import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import axios from 'axios'
import { SheetContext } from './App'
import Container from 'react-bootstrap/esm/Container'

export default function AddForm() {
	const { setSheetData } = useContext(SheetContext)

	useEffect(() => {
		axios
			.post('https://bible-commentary.herokuapp.com/read', {
				message: 'message',
			})
			.then(res => {
				console.log(res.data)
				setSheetData(res.data)
			})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	async function handleSubmit(e) {
		e.preventDefault()

		axios
			.post('https://bible-commentary.herokuapp.com/', {
				time: new Date().toLocaleTimeString(),
				book: `${e.target[0].value}`,
				verses: `${e.target[1].value}`,
				name: e.target[2].value,
				commentary: e.target[3].value,
				interpretation: e.target[4].value,
				source: e.target[5].value,
			})
			.then(res => {
				setSheetData(res.data)
				console.log(res.data)
			})

		for (let i = 0; i < 5; i++) {
			e.target[i].value = ''
		}
	}

	return (
		<Container fluid className='AddForm bg-gradient bg-gray'>
			<Form onSubmit={handleSubmit} className='flex flex-wrap flex-center'>
				<Form.Group className='mb-3' controlId='formBook'>
					<Form.Label>Book and Chapter</Form.Label>
					<Form.Control type='text' placeholder='Matthew 1' />
					<Form.Text className='text-muted'></Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formFirstVerse'>
					<Form.Label>Verses</Form.Label>
					<Form.Control type='text' placeholder='1-6' />
					<Form.Text className='text-muted'></Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label>Your Name</Form.Label>
					<Form.Control type='text' placeholder='Name' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formCommentary'>
					<Form.Label>Your Commentary</Form.Label>
					<Form.Control type='text' placeholder='Commentary' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formInterpretation'>
					<Form.Label>Your interpretation</Form.Label>
					<Form.Control type='text' placeholder='interpretation' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formSource'>
					<Form.Label>Your Source</Form.Label>
					<Form.Control type='text' placeholder='resource' />
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	)
}
