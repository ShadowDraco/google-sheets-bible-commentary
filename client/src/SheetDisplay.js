// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import FormSelect from 'react-bootstrap/FormSelect'
import Button from 'react-bootstrap/Button'
import { SheetContext } from './App'
import SheetRow from './SheetRow'

export default function SheetDisplay() {
	const { sheetData } = useContext(SheetContext)
	const [currentBook, setCurrentBook] = useState('')
	const [filtering, setFiltering] = useState(false)

	const changeCurrentBook = e => {
		setCurrentBook(e.target.value)
		setFiltering(true)
	}

	const stopFiltering = e => {
		setFiltering(false)
	}

	return (
		<Container fluid className='mt-5 -grid'>
			<Container fluid className='flex flex-center flex-column'>
				<div>
					<label htmlFor='chapter-picker'>Pick a chapter to display:</label>
					<FormSelect
						onChange={changeCurrentBook}
						value={currentBook}
						name='chapter-picker'
						id='chapter-picker'
					>
						<option value={false}></option>
						<option value='Matthew'>Matthew</option>{' '}
						{/*  use toLowercase to convert*/}
						<option value='James'>James</option>
					</FormSelect>
				</div>

				<Button onClick={stopFiltering}>Stop Filtering</Button>
			</Container>

			{sheetData?.values.map((row, i) => {
				return (
					<SheetRow
						key={`${row[0]} ${i}`}
						row={row}
						currentBook={currentBook}
						filtering={filtering}
					/>
				)
			})}
		</Container>
	)
}
