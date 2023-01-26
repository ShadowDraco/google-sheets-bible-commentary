import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Components/Pages/Home'
import PastorNotes from './Components/Pages/PastorNotes'
import About from './Components/Pages/About'
import BibleNavbar from './Components/Pages/BibleNavbar'

import './App.css'

import Container from 'react-bootstrap/Container'

export const SheetContext = createContext()

function App() {
	const [sheetData, setSheetData] = useState()

	return (
		<Container
			fluid
			className='App bg-gradient bg-secondary text-light m-0 p-0'
		>
			<SheetContext.Provider value={{ sheetData, setSheetData }}>
				<Router>
					<BibleNavbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/notes' element={<PastorNotes />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</Router>
			</SheetContext.Provider>
		</Container>
	)
}

export default App
