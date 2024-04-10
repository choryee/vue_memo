<template>
  <div>
    <input type="number" placeholder="세로" :value="row" @change="onChangeRow"/>
    <input type="number" placeholder="세로" :value="cell" @change="onChangeCell"/>
    <input type="number" placeholder="지뢰" :value="mine" @change="onChangeMine"/>
    <button @click="onClickBtn">시작</button>
  </div>
</template>

<script>
export default {
  data(){ // 여기 지역적인 데이터는 state말고, 여기에 만들기. 여기서만 사용할 데이터는
      return{
        row:10,
        cell:10,
        mine:20
      }
  },
  methods:{
    onChangeRow(e){
      this.row =e.target.value;
    },
    onChangeCell(e){
      this.cell =e.target.value;
    },
    onChangeMine(e){
      this.mine =e.target.value;
    },
    onClickBtn(){
       return this.$store.commit('start_game', {row:this.row, cell:this.cell, mine:this.mine})
    }
  },

}
</script>