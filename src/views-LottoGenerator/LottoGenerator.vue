<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한번 더</button>
  </div>
</template>

<script>


import LottoBall from "./LottoBall.vue";

function getWinNumbers() {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}

const timeouts= [];
export default {
  name: 'LottoGenerator',
  components: {
    'lotto-ball' : LottoBall
  },
  data(){
    return {
      winNumbers: getWinNumbers(), //45개중 선택한것. 시각적으로 하나씩 밑에 winBalls에 넣을 것.
      winBalls:[],
      bonus:null,
      redo: false,
    }
  },
  created() {
   // this.randomNumer();
    console.log('  getWinNumbers()>>>',  getWinNumbers());
    },

  mounted() {
      this.showBalls();
  },
  methods:{
    onClickRedo(){
      this.winNumbers=getWinNumbers();
      this.winBalls=[];
      this.bonus=null;
      this.redo=false;
     // this.showBalls(); 6-4강.  this.showBalls();을 watch로 재구성.
    },

     showBalls(){
       for(let i=0; i<this.winNumbers.length-1; i++){
         timeouts[i] = setTimeout(()=>{
           this.winBalls.push(this.winNumbers[i])
         }, (i+1)*1000);
       }

      timeouts[6] = setTimeout(()=>{
         this.bonus=this.winNumbers[6];
         this.redo=true;
       },7000)
     }
    // randomNumer(){
    //   for(let i=0; i<this.winBalls.length-1; i++){
    //     setTimeout(()=>{
    //       this.winBalls.push(this.winNumbers[i])
    //     }, (i+1)*1000)
    //   }
    //
    // },
  },
  beforeDestroy() { //setTimeout메모리 누수 방지 위해.
    timeouts.forEach(t=>{
      clearTimeout(t);
    })
  },
  watch:{
    winBalls(val, oldVal){ // this.winBalls=[];가 바뀌는 것을 감시.
      if(val.length === 0){
        this.showBalls(); // winBalls의 배열이 빌때,  this.showBalls();를 실행하라.
      }
    }
  }
}
</script>