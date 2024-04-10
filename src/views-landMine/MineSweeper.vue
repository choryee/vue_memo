<template>
  <div>
      <mine-form/>
      <div>{{timer}}</div>
    <Table-component/>
    <dive>{{result}}</dive>
  </div>

</template>

<script>

import store from './store.js'
import {mapState} from "vuex";
import TableComponent from "./TableComponent.vue";
export default {
  store, // 이거해야, this.$store. 사용가능.
  components:{TableComponent},
  data(){
      return {

      }
  },
  computed:{
    ...mapState(['timer', 'result'])
  },
  methods: {
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