<template>
  <div>
<!--     <p v-model="message"></p>-->
    <input type="text" v-model="message"/><br/>
    {{message}}<br/>

    x: <input v-model.number="numberX"/><br/>
    y: <input v-model.number="numberY"/><br/>
    <button @click="calNumber">Calulate</button>
    result : {{result}}
  </div>
</template>

<script>
import {computed, ref} from 'vue';

export default {
  name: "Test1View",
  setup() {
    const message = ref('great!!');

    const numberX=ref(10);
    const numberY=ref(20);
    const result=ref();
    const calNumber = ()=>{
      console.log(numberX)
       result.value=numberX.value+numberY.value;
       //return result;
    };

    return {
      numberX,numberY,  message,result, calNumber
    }
  }
}
</script>