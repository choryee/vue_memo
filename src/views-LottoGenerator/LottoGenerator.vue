<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if="redo">한번 더</button>
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
      for(let i=0; i<this.winNumbers.length-1; i++){
        setTimeout(()=>{
          this.winBalls.push(this.winNumbers[i])
        }, (i+1)*1000);
      }

      setTimeout(()=>{
        this.bonus=this.winNumbers[6];
        this.redo=true;
      })
  },
  methods:{
    // randomNumer(){
    //   for(let i=0; i<this.winBalls.length-1; i++){
    //     setTimeout(()=>{
    //       this.winBalls.push(this.winNumbers[i])
    //     }, (i+1)*1000)
    //   }
    //
    // },
  }
}
</script>