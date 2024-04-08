<template>
<td @click="onClickTd(cellData, rowIndex, cellIndex, turn)">
   cellData : {{cellData}}
</td>

</template>

<script>

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

      this.$emit('turn-change', cellData, rowIndex, cellIndex, turn);

    }
  }
}
</script>