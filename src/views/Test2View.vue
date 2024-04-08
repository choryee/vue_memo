<template>
  <div>
    x:<input v-model.number="state.x"/>
    y:<input v-model.number="state.y"/>
    <button @click="calcAdd">계산</button>
    result: {{state.result}}
  </div>
</template>

<script>
import {computed, ref, reactive} from 'vue';

export default {
  name: "Test2View",
  setup() {
    const state=reactive({x:10, y:25, result:30});
    const calcAdd=computed(()=>{
      state.result=state.x+state.y;
    })

    return {state, calcAdd}
  }
}
</script>