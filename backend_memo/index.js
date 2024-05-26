const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // JSON 본문을 파싱하기 위한 미들웨어

const database=require('./database'); // database.js파일 만듬. 1;16'00


const memos=[];

app.get('/api/memos', async (req, res) => {
    // 밑이 await붙일려면, 바로 위 async (req, res)해줘야. 1'21'35
    const result =  await database.run('select * from memos'); // 1'20'18
    res.send(result);
});

app.post('/api/memos', async  (req, res) => {
   console.log('req.body.content.. ', req.body.content);
   //memos.push('서버에서 추가한 내용..');
   //memos.push(req.body.content);
    await database.run(`insert into memos(content) values('${req.body.content}')`);
    const result =  await database.run('select * from memos'); // 1'20'18
    //res.send(memos);
    res.send(result);
});

app.put('/api/memos/:idx', async (req,res)=>{
    const content=req.body.content;
    console.log('  getIdx>>>',  content);
    //memos.filter((_, idx)=>idx !==getIdx)
    console.log('  req.params.idx>>>',  req.params.idx);
    //res.send(memos.filter((_, idx)=>idx !==getIdx));
    memos[req.params.idx]=req.body.content;

    await database.run(`update memos set content='${req.body.content}' where id=${req.params.idx}`);
    const result =  await database.run('select * from memos'); // 1'20'18
    res.send(result);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})