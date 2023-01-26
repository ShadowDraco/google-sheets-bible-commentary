import React from 'react'
import Container from 'react-bootstrap/Container'

export default function SheetRow(props) {
	return (
		<Container fluid className='-row'>
			{props.filtering === true
				? props.row[0].split(' ')[0].trim().toLowerCase() ===
				  props.currentBook.toLowerCase()
					? props.row.map((col, i) => {
							return (
								<Container key={`${col} ${i}`} className={`-col col-${i}`}>
									{col} filtered
								</Container>
							)
					  })
					: ''
				: props.row.map((col, i) => {
						return (
							<Container key={`${col} ${i}`} className={`-col col-${i}`}>
								{col}
							</Container>
						)
				  })}
		</Container>
	)
}
