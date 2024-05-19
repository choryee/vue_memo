const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSON 본문을 파싱하기 위한 미들웨어


const memos=['메모 1내용', '메모 2내용'];

app.get('/api/memos', (req, res) => {
  res.send(memos);
});

app.post('/api/memos', (req, res) => {
   console.log('post.. ', req);
   memos.push('서버에서 추가한 내용..');
   res.send(memos);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})