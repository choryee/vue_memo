<template>
  <table>
    <tr-component v-for="(rowData, index) in tableData"  :key="index" :row-data="rowData" :row-index="index"
                  :turn-data="turn"  @turn-change="turnChange">  </tr-component>
  {{tableData}}
  </table>
</template>

<script>
import TrComponent from './TrComponent.vue'
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
  methods:{
    turnChange(cellData, rowIndex, cellIndex, turn){
      let emitData =  this.$emit('turn-change', cellData, rowIndex,cellIndex, turn);

    }
  }
}
</script>