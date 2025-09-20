const express = require('express')
const app = express()
app.use(express.json())

const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const path = require('path')
const pathToDb = path.join(__dirname, 'contacts.db')

let db = null

const inicializeDbAndServer = async () => {
  try {
    db = await open({
      filename: pathToDb,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

inicializeDbAndServer()

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});


app.get('/contacts/', async (req, res) => {
  const getContactsQuery = `
    SELECT
      *
    FROM
      contacts;`
  const contactsArray = await db.all(getContactsQuery)
  res.send(contactsArray)
})

app.post('/contacts/', async (req, res) => {
  const { name, email, phone } = req.body
  const addContactQuery = `
    INSERT INTO
      contacts (name, email, phone)
    VALUES
      (
        '${name}',
        '${email}',
        '${phone}'
      );`
  const dbResponse = await db.run(addContactQuery)
  const contactId = dbResponse.lastID
  res.send({ contactId: contactId })
})

app.delete('/contacts/:contactId/', async (req, res) => {
  const { contactId } = req.params
  const deleteContactQuery = `
    DELETE FROM
      contacts
    WHERE
      id = ${contactId};`
  await db.run(deleteContactQuery)
  res.send({ message: 'Contact Deleted' })
})