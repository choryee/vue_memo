<template>
  <table>
    <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
      <td
          v-for="(cellData, cellIndex) in rowData"
          :key="cellIndex"
          :style="cellDataStyle(rowIndex, cellIndex)"
          @click="onClickTd(rowIndex, cellIndex)"
          @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
      >
        {{cellDataText(rowIndex, cellIndex)}} </td>
    </tr>
  </table>

</template>

<script>

import {mapState} from "vuex";
import {CODE} from './storeMine.js'

export default {
  components:{},

  data(){
    return {

    }
  },
  computed: {
    ...mapState(['tableData', 'halted']), // 그냥 halted 접근 가능.

    cellDataStyle() {
      return (row, cell)=> { // 고차함수-cellDataStyle()였던 함수를 매개변수를 더 추가할 수 있게 하는 것. cellDataStyle(rowIndex, cellIndex)
       //  computed안에서 함수 정의는 일반함수 형태로, 그의 리턴에서 함수는 화살표함수로 써야. this를 사용 가능.
        switch (this.$store.state.tableData[row][cell]) {
          case CODE.NORMAL:
          case CODE.MINE :
            return {
              background: '#444'
            }
          case CODE.CLICKED_MINE :
          case CODE.OPENED :
            return {
              background: 'blue'
            }
          case CODE.FLAG:
          case CODE.FLAG_MINE :
            return {
              background: 'red'
            }
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return {
              background: 'yellow'
            }
          default:
            return {}
        }
      }
    },
    cellDataText() {
      return  (row, cell)=> {
        switch (this.$store.state.tableData[row][cell]) {

          case CODE.MINE :
            return 'X';
          case CODE.NORMAL :
            return ''
          case CODE.CLICKED_MINE :
            return '펑'
          case CODE.FLAG:
          case CODE.FLAG_MINE :
            return '!'
          case CODE.QUESTION:
          case CODE.QUESTION_MINE:
            return '?'
          default:
            return ''
        }
      }
    },


  },
  methods:{
    onClickTd(row,cell){
      if(this.halted){
        return;
      }
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL:
          return this.$store.commit('open_cell', { row, cell });
        case CODE.MINE:
          return this.$store.commit('click_mine', { row, cell });
        default:
          return;
      }
      console.log(' onClickTd  >>>', 'row is', row,'cell is', cell);
      this.$store.commit('open_cell', {row:row, cell:cell});
    },
    onRightClickTd(row, cell){
      if(this.halted) return;
      switch (this.tableData[row][cell]) {
        case CODE.NORMAL: //빈 칸
        case CODE.MINE: //지뢰 있는 곳
          this.$store.commit('flag_cell', { row, cell });
          return;
        case CODE.FLAG_MINE: //깃발 꼿은 것을 unflagged할 때, mine이 되어야 하는 것. 8-5강, 09'00
        case CODE.FLAG: //빈칸 꼿은 것을 unflagged할 때, 빈 칸 이 되어야 하는 것.
          this.$store.commit('question_cell', { row, cell });
          return;
        case CODE.QUESTION_MINE:
        case CODE.QUESTION:
          this.$store.commit('normalize_cell', { row, cell });
          return;
        default:
          return;
      }
    }
  }
}
</script>