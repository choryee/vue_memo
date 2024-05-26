<template>
  <div>
    <div>
      <h6>{{turn}}님의 턴입니다.</h6>
    </div>
    <table-component
        :table-data="tableData" :turn-data="turn" @turn-change="turnChange"/>
    <div v-if="winner">{{winner}}님의 승리!!</div>
  </div>
      <div>
        <button @click="mapStateTest">mapStateTest</button>
      </div>
</template>

<script>
import TableComponent from './TableComponent.vue' ;
import store from './store.js'
import {mapState} from "vuex";

export default {
  store, // 이거해야, this.$store. 사용가능.
  components:{TableComponent},
  data(){
      return {
      //   tableData : [
      //       // ['o','x','o'],
      //       // ['x','x','o'],
      //       // ['o','o','x'],
      //     ['','',''],
      //     ['','',''],
      //     ['','',''],
      // ],
      //   turn : 'o',
      //   winner: ''
      }
  },
  computed:{
    //import store from './store.js'
    //import {mapState} from "vuex";
    //위 둘 임포트하고, state.js에 정의된 state의 객체를 사용가능. 240409
    ...mapState(['tableData','winner']),
    // 이 화면에서 vuex을 쓸려서, computed에 ...mapState사용해야 하고, 그러면 밑에서 this. 사용이 가능.
    //원래는 밑처럼인데, 위처럼 ...mapState로 한방에도 된다.
    turn(){
      return this.$store.state.turn;
    }
  },
  methods: {
    mapStateTest(){
      console.log(' this.$store.state.winner >>>', this.winner );
    },
    turnChange(cellData, rowIndex, cellIndex, turn) {
      // let emitData =  this.$emit('turn-change', cellData, rowIndex, cellIndex);
      //let tableLength = this.tableData.length;
      console.log('tic turn>>>', turn);
      console.log('tic cellIndex>>>', cellIndex);

     // this.tableData[rowIndex].forEach(oneRow => {
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
     //}) //forEach
    }, //turnChange()

    markingOX(cellData, rowIndex, cellIndex, turn){
      // this.$set.tableData 7-3강, 08'19 <--이차원배열을 인덱스로 직접 바뀌면, vue가 인식 못함.
     // this.turn === 'o' ? this.tableData[rowIndex][cellIndex] = 'o' : 'x';
     // this.tableData[rowIndex][cellIndex] = this.turn;

      //this.$store.commit('click_cell', rowIndex, cellIndex); //이거 안 됨.
      this.$store.commit('click_cell', {row:rowIndex, cell:cellIndex}); // 이렇게 객체로 넣야야 하는 듯.

    }
  },
}
</script>

<style>
table{
  border-collapse: collapse;
}
td{
  border: 1px solid blue;
  width: 50px   ;
  height: 50px;
  text-align: center;

}
</style>