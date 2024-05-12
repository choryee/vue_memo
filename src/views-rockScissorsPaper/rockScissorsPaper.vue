<template>
  <div>
<!--    <div id="computer" :class="{state:true, hello:false}" :style="{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}"></div>-->
    <div id="computer" :class="{state:true, hello:false}" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>

<script>
const rspCoords={
  바위:'0',
  가위:'-142px',
  보:'-284px'
}

let interval=null;

export default {

  data(){
    return {
      result:'',
      score:0,
      imgCoord: rspCoords.바위
    }
  },
  created() {// 컴포넌트가 있지만, 화면에 나타나기전에 실행되는 것.

  },
  computed:{
    computedStyleObject(){
      return { background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`};
    }
  },

  mounted() {
    interval = setInterval(()=>{
      switch (this.imgCoord){
        case rspCoords.바위 :
          this.imgCoord=rspCoords.가위;
          break;
        case rspCoords.가위 :
          this.imgCoord=rspCoords.보;
          break;
        case rspCoords.보 :
          this.imgCoord=rspCoords.바위;
          break;
      }
    }, 150);
  },

  beforeDestroy() {
    clearInterval(interval);
  }
  methods:{


    onClickButton(choice){
      switch (choice){
        case rspCoords.바위:

      }

    }
  },
}
</script>

<style>
#computer{
  width: 142px;
  height: 200px;
  background-position:  0 0 ;
}
</style>