// express 모듈 가져오기
const express = require('express')
// express function을 사용해서 app 만들기
const app = express()
const port = 5000

// mongoose 모듈 가져오기
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alvinpeace:<password></password>@boilerplate.kf1h3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// root 디렉토리에 오면 'Hello World!'를 출력해라
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})