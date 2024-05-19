vue3+express memo 강의

집에서 intellij안되서, vsc로 작업함.

vue-memo밑에 backend폴더 생성함. 38'00
실행은 node index.js

여기 프록젝트에는 vite.config.ts를 쓰고 있어서, proxy서버 설정을 여기에 해줘야.
http://localhost:3000이렇게 서버로 요청하면, cors로 막아서, 밑처럼 프록시로 우회해줘야.

server: {
    proxy: {
      '/api': 'http://localhost:3000', // 백엔드 서버 주소로 프록시 설정
    },
  },