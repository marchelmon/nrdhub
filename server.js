 const express = require('express')
 const connectDB = require('./config/db.js')

 const app = express()

app.use(express.json({ extended: false }))

 connectDB()

 app.get('/', (req, res) => {
   console.log("s")
   res.send('KÖÖRRRR!!!!')
 })

 app.use('/api/users', require('./routes/api/users'))
 app.use('/api/auth', require('./routes/api/auth'))
 app.use('/api/profile', require('./routes/api/profile'))
 app.use('/api/posts', require('./routes/api/posts'))

 const PORT = process.env.PORT || 5000
 app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
