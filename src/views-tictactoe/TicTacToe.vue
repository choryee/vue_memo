<template>
  <div>
    <div>
      <h2>      {{turn}}님의 턴입니다.</h2>
    </div>
    <table-component :table-data="tableData" :turn-data="turn" @turn-change="turnChange"/>
    <div v-if="winner">{{winner}}님의 승리!!</div>
  </div>

</template>

<script>
import TableComponent from './TableComponent.vue' ;

export default {
  components:{TableComponent},
  data(){
      return {
        tableData : [
            // ['o','x','o'],
            // ['x','x','o'],
            // ['o','o','x'],
          ['','',''],
          ['','',''],
          ['','',''],
      ],
        turn : 'o',
        winner: ''
      }
  },
  methods: {
    turnChange(cellData, rowIndex, cellIndex, turn) {
      // let emitData =  this.$emit('turn-change', cellData, rowIndex, cellIndex);
      let tableLength = this.tableData.length;
      console.log('tic turn>>>', turn);

      this.tableData[rowIndex].forEach(oneRow => {
       // let tableCell = this.tableData[rowIndex][cellIndex];

        // if(cellData === 'o'){
        //   console.log('o >>>', );
        //   this.tableData[rowIndex][cellIndex]='x';
        // }else if(cellData === 'x'){
        //   console.log('x >>>', );
        //   //oneRow[cellIndex].push('o')
        //   this.tableData[rowIndex][cellIndex]='o';
        // }

        //cellData === 'o' ? this.tableData[rowIndex][cellIndex] = 'x' : this.tableData[rowIndex][cellIndex] = 'o';

        //this.calOX(cellData, rowIndex, cellIndex, turn);
        this.markingOX(cellData, rowIndex, cellIndex, turn);
      }) //forEach
    },

    calOX(cellData, rowIndex, cellIndex, turn) {
      if (this.turn === 'o' || this.turn === 'x') {
        for (let i = 0; i < 3; i++) {
          let cellSet = new Set();
          for (let j = 0; j < 3; j++) {
            cellSet.add(this.tableData[i][j]);
          } // j

            // Set의 크기가 1이면 모든 값이 같다는 뜻입니다.
          if (cellSet.size === 1) {
            console.log('All matched. >>>', );
            break; // 여기서 중복된 값을 찾았으므로 더 이상 반복할 필요가 없습니다.
          }
          //alert('all matched.');
        } // i
      }
    },
    markingOX(cellData, rowIndex, cellIndex, turn){
      // this.$set.tableData 7-3강, 08'19 <--이차원배열을 인덱스로 직접 바뀌면, vue가 인식 못함.
     // this.turn === 'o' ? this.tableData[rowIndex][cellIndex] = 'o' : 'x';
      this.tableData[rowIndex][cellIndex] = this.turn;
      this.turn = this.turn === 'o' ? 'x' : 'o';
    }

  },


}
</script>

<style>
table{
  border-collapse: collapse;
}
td{
  border: 1px solid white;
  width: 50px   ;
  height: 50px;
  text-align: center;

}
</style>