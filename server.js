const express = require('express')
const app = express()
const port = 8085

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/welcome',(req,res)=>{
  res.send('Welcome to IACSD');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})