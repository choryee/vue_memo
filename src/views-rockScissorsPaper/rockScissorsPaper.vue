<template>
  <div>
<!--    <div id="computer" :class="{state:true, hello:false}" :style="{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}"></div>-->
    <div id="computer" :class="{state:true, hello:false}" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('바위')">바위</button>
      <button @click="onClickButton('가위')">가위</button>
      <button @click="onClickButton('보')">보</button>
    </div>
    <div>결과 : {{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>

<script>
const rspCoords={
  바위:'0',
  가위:'-142px',
  보:'-284px'
}
const scores={
  가위:1,
  바위:0,
  보:-1
}

//Object.entries(rspCoords) 객체의 키:값을 각각 배열로 만듬.
const computerChoice = (imgCoord)=>{ //최종 리턴은 '바위','가위','보'중 문자임.
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0]
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
      //console.log('  this.imgCoord>>>',  this.imgCoord);
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
  },

  methods:{
    onClickButton(choice){//바위
      clearInterval(interval);
      console.log('  onClickButton>>>',  choice);//바위
      console.log(' this.imgCoord >>>', this.imgCoord ); //숫자임.

     //여기 조현영 코드 적어야. 5-4강. 04'00

      // switch (choice){
      //   case rspCoords.바위:
      //     this.result='무승부..';
      //     break;
      //   case rspCoords.가위:
      //     this.result='승..';
      //     break;
      //   case rspCoords.보:
      //     this.result='패..';
      //     break;
      // }

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