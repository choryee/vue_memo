<template>
<!--  <div class="ball" :style="{background}">{{number}}</div> 밑 data()사용할 경우.-->
  <div class="ball" :style="backGround">{{number}}</div>
</template>

<script>

export default {
  name:'LottoBall',
  props:{
    number : Number
  },
  computed:{
    backGround(){
      let background;

      switch (Math.floor(this.number / 10)){
        case 0:
          background='red';
          break;
        case 1:
          background='orange';
          break;
        case 2:
          background='yellow';
          break;
        case 3:
          background='blue';
          break;
        default :
          background='green';
      }
      return {
        background,
      }
    }

  },

  data(){
    let background;

    switch (Math.floor(this.number / 10)){
      case 0:
        background='red';
        break;
      case 1:
        background='orange';
        break;
      case 2:
        background='yellow';
        break;
      case 3:
        background='blue';
        break;
      default :
        background='green';
    }
    return {
      background
    }
  },

  methods:{

  },
}
</script>

<style>
.ball{
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>