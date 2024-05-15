<template>
  <div ref="answer" >{{word}}</div>
  <div>
    <input type="text" v-model="value" />
    <button @click="onClickInput">입력</button>
  </div>
  <div>{{result}}</div>
</template>

<script>

export default {

  props:
    ['startWord'],
  data(){
    return {
      word:this.startWord,
      value:'',
      result:''
    }
  },
   methods:{
     onClickInput(){
       if(this.word[this.word.length-1] === this.value[0]){
         this.result='딩동댕!!';
         this.word=this.value;
         this.value='';
         this.$refs.answer.focus();
       }else {
         this.result='땡!';
         this.value='';
         this.$refs.answer.focus();
       }
     }
   }
}
</script>