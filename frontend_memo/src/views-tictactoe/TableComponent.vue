<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData"  :key="index" :row-data="rowData" :row-index="index"
                  :turn-data="turn"  @turn-change="turnChange" @click="getTableData">  </tr-component>
<!--  {{tableData}}-->
  </table>
</template>

<script>
import TrComponent from './TrComponent.vue'
import {mapGetters} from "vuex";

export default {
  components:{TrComponent},
  props: {
    tableData : Array,
    turn: String
  },
  data(){
    return {

    }
  },
  computed:{
    //getTableDataWithComputed(){
      // return this.$store.state.tableData()

    ...mapGetters(['turnMessage']),
    //위와 아래는 같은것.
    turnMessage(){ // 7-9강. 중간.
      return this.$store.getters.turnMessage;
    }
  },
  methods:{
    turnChange(cellData, rowIndex, cellIndex, turn){
      let emitData =  this.$emit('turn-change', cellData, rowIndex,cellIndex, turn);

    },
    getTableData(){
      console.log('Table tableData  >>>', this.tableData );
    }
  }
}
</script>