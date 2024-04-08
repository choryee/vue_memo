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
            ['o','x','o'],
            ['x','x','o'],
            ['o','o','x'],
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
        this.calOx(cellData, rowIndex, cellIndex, turn);
      })
    },
    calOx(cellData, rowIndex, cellIndex, turn) {
      if (this.turn === 'o'){
        let index=0;
        for(let i=0; i<index; i++){
          let cellSet=new Set();
          for(let j=0; j<3, j++){
            cellSet.add(this.tableData[i][i]);
            cellSet.forEach(cell=>{
              cell===cell;
            })
          }//j

        }// i
      }
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