<template>
   <div class="row mb-3">
     <div class="col">
       <div class="input-group">
         <input type="text" id="msg" class="form-control" name="msg" placeholder="할 일을 여기에 입력!!" v-model.trim="todo"
          @keyup.enter="addTodoHandler"/>
           <span class="btn btn-primary input-group-addon" @click="addTodoHandler">추가</span>
       </div>
     </div>
  </div>
</template>

<script>
export  default {
  name:"InputTodo",
  data(){
    return { todo:''}
  },
  emits :["add-todo"], // 이건 그냥 메모용
  methods:{
    addTodoHandler(){ //emitter
      if(this.todo.length>=3){ // 사용자가 입력한 할 일의 길이가 3글자 이상인지를 확인하는 조건문입니다
        this.$emit('add-todo', this.todo);
        this.todo="";
      }else {
        alert('할일 길이가 짧습니다.!!')
      }
    }
  }
}
</script>