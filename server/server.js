const express = require("express")
const keys = require("./google-api-credentials.json")
//initilize express
const app = express()
require("dotenv").config()
const port = process.env.PORT
if (port == null || port == "") {
  port = 8000
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")))
  app.get("*", (req, resp) => {
    resp.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
}

//googleapis
const { google } = require("googleapis")

app.use(express.urlencoded({ extended: true, limit: "5mb" }))
app.use(express.json({ limit: "5mb" })) // limit allows for larger requests
// allow the server to bypass CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

const auth = new google.auth.GoogleAuth({
  keyFile: "google-api-credentials.json", //the key file
  //url to spreadsheets API
  scopes: "https://www.googleapis.com/auth/spreadsheets",
})

//Auth client Object
const authClientObject = async () => {
  return await auth.getClient()
}

//Google sheets instance
const googleSheetsInstance = google.sheets({
  version: "v4",
  auth: authClientObject,
})

const spreadsheetId = process.env.SHEET_ID

app.post("/", async (req, res) => {
  const {
    time,
    book,
    chapter,
    firstVerse,
    lastVerse,
    bookChapterVerses,
    name,
    commentary,
    source,
    interpretation,
  } = req.body

  //write data into the google sheets
  await googleSheetsInstance.spreadsheets.values.append({
    auth, //auth object
    spreadsheetId, //spreadsheet id
    range: "Sheet1!A:J", //sheet name and range of cells
    valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
    resource: {
      values: [
        [
          time,
          book,
          chapter,
          firstVerse,
          bookChapterVerses,
          name,
          commentary,
          source,
          interpretation,
        ],
      ],
    },
  })

  //Read front the spreadsheet
  const readData = await googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "Sheet1!F:J", //range of cells to read from.
  })

  //send the data reae with the response
  res.send(readData.data)
})

app.get("/read", async (req, res) => {
  console.log("reading from sheet")
  //Read front the spreadsheet
  const readData = await googleSheetsInstance.spreadsheets.values.get({
    auth, //auth object
    spreadsheetId, // spreadsheet id
    range: "Sheet1!F:J", //range of cells to read from.
  })
  res.send(readData.data)
})

app.listen(port, (req, res) => {
  console.log("listening!")
})
