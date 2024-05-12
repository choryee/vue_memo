<template>
  <div>
    <div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
    <div v-show="result.length">
      <div>평균시간 : {{result}}</div>
<!--      <div>result : {{average}}</div>-->
<!--      <div>result : {{result.reduce((a,b)=>a+b,0)/result.length}}</div>-->
      <div>result: {{resultAverage}}</div>
      <button @click="onReset">리셋</button>
    </div>
  </div>
</template>

<script>
let startTime=0;
let endTime=0;
let timeOut=null;
export default {
  name:'ResponseCheck',
  data(){
    return {
      result : [],
      state : 'waiting',
      message : '클릭해서 시작하세요',
      average : 0
    }
  },
  created() {

  },
  computed:{
    resultAverage(){
      return  this.result.reduce((a,b)=>a+b,0)/this.result.length;
    }
  },

  methods:{
    calAverage(){
      let arrLength=this.result.length;
      let sum=0;
      for(let a of this.result){
        sum+=a;
      }
      return Math.floor(sum/arrLength);
    },

    onClickScreen(){
      this.changeClass();
      // const screen=document.querySelector('#screen');
      // screen.addEventListener('click', (e)=>{
      // console.log(' changeColor >>>',  );
      // })
    },

    changeClass(){ // 한번씩 클릭해야, 이 매소드 실행되는 것.
      switch (this.state){

        case 'waiting':
          this.state = 'ready';
          this.message='초록색이 되면 시작하세요';

           timeOut = setTimeout(()=>{
               this.state='now';
                this.message='지금 클릭';
                startTime=new Date();
            }, Math.floor(Math.random()*1000)+2000);
          break;

        case 'ready':
          clearTimeout(timeOut);
          this.state='waiting';
          this.message='너뭇 성급하시네요.초록색이 되면 시작하세요 '
          break;

        case 'now':
          endTime = new Date();
          this.state='waiting';
          this.message='클릭해서, 시작하세요 ';
          this.result.push(endTime - startTime);
          this.average = this.calAverage();
          break;
      }

    },

    onReset(){
      this.result=null;
      this.average=null;
    }
  },

}
</script>
<style>
#screen{
  width: 300px;
  height: 200px;
  text-align: center;
  user-select: none;
  background-color: aqua;
}
#screen.waiting{
  background-color: blueviolet;
}
#screen.ready{
  background-color: red;
}
#screen.now{
  background-color: greenyellow;
}
</style>