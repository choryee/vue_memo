<template>
  <div>
    <table-component :table-data="tableData" :turn-data="turn" @turn-change="turnChange"/>
    <div>{{turn}}님의 턴입니다.</div>
  </div>
  <h3>hey</h3>
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
      }
  },
  methods: {
    turnChange(cellData, rowIndex, cellIndex, turn) {
      // let emitData =  this.$emit('turn-change', cellData, rowIndex, cellIndex);
      let tableLength = this.tableData.length;
      console.log('tic turn>>>', turn);

      this.tableData[rowIndex].forEach(oneRow => {
        let tableCell = this.tableData[rowIndex][cellIndex];

        // if(cellData === 'o'){
        //   console.log('o >>>', );
        //   this.tableData[rowIndex][cellIndex]='x';
        // }else if(cellData === 'x'){
        //   console.log('x >>>', );
        //   //oneRow[cellIndex].push('o')
        //   this.tableData[rowIndex][cellIndex]='o';
        // }

        cellData === 'o' ? this.tableData[rowIndex][cellIndex] = 'x' : this.tableData[rowIndex][cellIndex] = 'o';
        this.turn = turn === 'o' ? 'x' : 'o';
        this.calOX(cellData, rowIndex, cellIndex, turn);
        this.markingOX(cellData, rowIndex, cellIndex, turn);
      })
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
      this.turn === 'o' ? this.tableData[rowIndex][cellIndex] = 'o' : 'x';
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