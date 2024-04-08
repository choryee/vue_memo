<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :row-index="rowIndex" :cell-index="index"
                  :turn-data="turn" @turn-change="turnChange"
    >  </td-component>
<!--    {{rowData}}-->
  </tr>


</template>

<script>
import TdComponent from './TdComponent.vue'
export default {
  components:{TdComponent},
  props:{
    rowData: Array,
    rowIndex:Number,
    turn: String

  },
  data(){
    return {
      parent:'I am your father'

    }
  },
  methods:{
    turnChange(cellData, rowIndex, cellIndex, turn){
      let emitData =  this.$emit('turn-change', cellData, rowIndex, cellIndex, turn);

    }
  }
}
</script>