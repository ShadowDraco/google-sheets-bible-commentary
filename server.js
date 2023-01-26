const express = require('express')
const keys = require('./google-api-credentials.json')
const path = require('path')
//initialize express
const app = express()
require('dotenv').config()

//googleapis
const { google } = require('googleapis')

let port = process.env.PORT
if (port == null || port == '') {
	port = 8000
}

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client', 'build')))
	app.get('*', (req, resp) => {
		resp.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
	})
}

app.use(express.urlencoded({ extended: true, limit: '5mb' }))
app.use(express.json({ limit: '5mb' })) // limit allows for larger requests
// allow the server to bypass CORS
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})

const auth = new google.auth.GoogleAuth({
	keyFile: 'google-api-credentials.json', //the key file
	//url to spreadsheets API
	scopes: 'https://www.googleapis.com/auth/spreadsheets',
})

//Auth client Object
const authClientObject = async () => {
	return await auth.getClient()
}

//Google sheets instance
const googleSheetsInstance = google.sheets({
	version: 'v4',
	auth: authClientObject,
})

const spreadsheetId = process.env.SHEET_ID

app.post('/', async (req, res) => {
	console.log('home route accessed')
	const { time, book, verses, name, commentary, interpretation, source } =
		req.body

	const bookChapterVerses = `${book.trim()}:${verses.trim()}`

	//write data into the google sheets
	await googleSheetsInstance.spreadsheets.values.append({
		auth, //auth object
		spreadsheetId, //spreadsheet id
		range: 'Sheet1!A:F', //sheet name and range of cells
		valueInputOption: 'USER_ENTERED', // The information will be passed according to what the user passes in as date, number or text
		resource: {
			values: [
				[
					time,
					bookChapterVerses,
					name.trim(),
					commentary,
					interpretation,
					source,
				],
			],
		},
	})

	//Read front the spreadsheet
	const readData = await googleSheetsInstance.spreadsheets.values.get({
		auth, //auth object
		spreadsheetId, // spreadsheet id
		range: 'Sheet1!B:E', //range of cells to read from.
	})

	//send the data read with the response
	res.send(readData.data)
})

app.post('/read', async (req, res) => {
	console.log('reading from sheet')
	//Read front the spreadsheet
	const readData = await googleSheetsInstance.spreadsheets.values.get({
		auth, //auth object
		spreadsheetId, // spreadsheet id
		range: 'Sheet1!B:E', //range of cells to read from.
	})
	res.send(readData.data)
})

app.listen(port, (req, res) => {
	console.log(`listening on port ${port} <------------====`)
})
