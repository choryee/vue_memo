<template>
<td @click="onClickTd(cellData, rowIndex, cellIndex, turn)">
  {{cellData}}
</td>

</template>

<script>

import store from './store.js'

export default {
  props:{
    cellData:String,
    rowIndex:Number,
    cellIndex:Number,
    turn: String
  },

  data(){
    return {

    }
  },
  methods:{
    onClickTd(cellData,rowIndex, cellIndex, turn){
      console.log('  this.$root.$data>>>', this.$root.$data ); //이건 최근에 바로 접근 못하고, emit으로 바꾸어야.
      console.log('  this.$parent.$data>>>', this.$parent.$data )
      //this.$root.$data.turn = this.$root.$data.turn === 'o' ? 'x' :'o';

      let newTurn = this.turn==='o' ? 'x':'o';
      this.$emit('turn-change', cellData, rowIndex, cellIndex, newTurn);


      if (this.cellData) return;

      const rootData = this.$root.$data;
      console.log(' rootData>>>', rootData);
      //this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
      //this.$store.commit('click_cell', rowIndex, cellIndex);

      // let win = false;
      // if (rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn) {
      //   win = true;
      // }
      // if (rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn) {
      //   win = true;
      // }
      // if (rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
      //   win = true;
      // }
      // if (rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn) {
      //   win = true;
      // }
      //
      // if (win) { // 이긴 경우: 3줄 달성
      //   rootData.winner = rootData.turn;
      //   rootData.turn = 'O';
      //   rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
      // } else { // 무승부
      //   let all = true; // all이 true면 무승부라는 뜻
      //   rootData.tableData.forEach((row) => { // 무승부 검사
      //     row.forEach((cell) => {
      //       if (!cell) {
      //         all = false;
      //       }
      //     });
      //   });
      //   if (all) { // 무승부
      //     rootData.winner = '';
      //     rootData.turn = 'O';
      //     rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
      //   } else {
      //     rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
      //   }
      // }

    }
  }
}
</script>