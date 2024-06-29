vue3 + express memo 강의 240526
- vue3, 서버는 express사용함.

집에서 intellij안되서, vsc로 작업함.
https://www.youtube.com/watch?v=ADxbGlwhl_s&list=PLtht1_et-35AQSnfVkqkjdfhBX_P-9U4-&index=2
https://github.com/africalib/studies/tree/master/vue3/memo

"build": "run-p type-check \"build-only {@}\" --",

vue-memo밑에 backend폴더 생성함. 38'00

실행은
서버: backend로 이동후, node index.js <-- index.js수정하면, 재시작해줘야. 스프링처럼.
웹 : vue_memo_this에서  npm run dev
http://localhost:5173/memo

개발자도구
Network에서 preview은 그 해당 api의 결과를 보여주는 것.

const content=prompt('Enter content plz..')
axios.post("/api/memos", {content:content})
            .then(res=>{
            console.log(' post res.data>>', res.data);
            state.data=res.data;
        })
 이런식으로 화면->서버로 보내면, Network/Headers에서 Request Payload(적재,하중)에 서버로 전송하는 내용 보임.

DB도 연결함.
Hedisql에 memo디비의 memos테이블임.

1강 마지막부분에,  await database.run(`insert into memos(content) values('${req.body.content}')`);
이렇게 하면, sql injection공격 받을 수있으므로, 그거 수정하는 내용으로 강의 끝남. 240525

------
frontend_memo에서
npm run build하면, dist가 생기고, 이것을 backend_memo로 옮겨준다.
서버의 index.js에 app.use(express.static('dist'));를 추가해주고, node index.js하면
localhost:3000만해도, 화면이 보여야 하는데, 안 보임. 240525

리눅스 서버에 올리기.
- backend_memo를 파일지라로 서버의 폴더로 옮긴다.
-node index.js하면, 화면에 보일것이다. 하지만, node index.js를 한 명령창을 닫으면,
서버가 멈춰, 화면이 안 보인다. 그래서, 무중단 배포가 필요한것.
- 위 2강 마지막 부분에 pm2로 무중단 보여줌. 간단함.


여기 프로젝트에는 vite.config.ts를 쓰고 있어서, proxy서버 설정을 여기에 해줘야.
http://localhost:3000이렇게 서버(서버포트는 3000임)로 요청하면, cors로 막아서, 밑처럼 프록시로 우회해줘야.

outputDir : path.resolve(__dirname, "../backend_memo/dist"), // npm run build로 빌드한 것의 dist위치를 변경하는 것.
server: {
    proxy: {
      '/api': 'http://localhost:3000', // 백엔드 서버 주소로 프록시 설정. 여긴 서버 주소를 쓰는 것.
    },
  },