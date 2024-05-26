<template>
  <div>

      <mine-form/>
      <div>{{timer}}</div>

    <Table-component/>
    <div>{{result}}</div>
  </div>

</template>

<script>

import TableComponent from "./TableComponent.vue";
import store from './storeMine.js'
import {mapState} from "vuex";
import MineForm from "./MineForm.vue";

let interval;
export default {
  store, // 이거해야, this.$store. 사용가능.
  components:{TableComponent, MineForm},
  data(){
      return {
      }
  },
  computed:{
    ...mapState(['timer', 'result', 'halted']), // 그냥 timer로 접근 가능.
    timer(){
      return this.$store.state.timer;
    }
  },
  methods: {

    },
 watch:{
    halted(value, oldValue){
      if(value===false){ // false-시작 상태.
        interval =  setInterval(()=>{
          this.$store.commit('increment_timer');
        }, 1000)
      }else {
        clearInterval(interval);
      }
    }
 }

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