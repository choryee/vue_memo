<template>
<!--    <div style="font-size: 30px; font-weight;">{{value==='' ? '김밥' : value }}</div>-->


<!--   밑은 2-1강. 컴포넌트의 필요성에서 컴포넌트로 만든것.
        <div style="font-size: 30px; font-weight ;" ref="answer" >{{word}}</div>-->
<!--  <div>-->
<!--    <input type="text" v-model="value"/>-->
<!--    <button @click="onClickInput">입력</button>-->
<!--  </div>-->
<!--  <div>{{result}}</div>-->

  <!--   밑은 2-1강. 컴포넌트의 필요성에서 컴포넌트로 만든것. -->
  <word-relay-component :word="word" :value="value" :result="result"/>
  <word-relay-component :word="word" :value="value" :result="result"/>
  <word-relay-component :word="word" :value="value" :result="result"/>

</template>

<script>
import wordRelayComponent from "./wordRelayComponent.vue";
const wordSuggestion=['김밥','사과','호랑이'];

export default {
  components:{
    wordRelayComponent
  }
  data(){
    return {
      word:'제로초',
      value:'',
      result:''
    }
  },
  mounted() {
    this.showingSuggestion();
  },
  methods:{
    showingSuggestion(){
      wordSuggestion.forEach( w=>{
        this.wordSuggestion=w;

      })
    },
    // onClickInput(){
    //   if(this.word[this.word.length-1] === this.value[0]){
    //     this.result='딩동댕!!';
    //     this.word=this.value;
    //     this.value='';
    //     this.$refs.answer.focus();
    //   }else {
    //     this.result='땡!';
    //     this.value='';
    //     this.$refs.answer.focus();
    //   }
    // }

  }
}
</script>