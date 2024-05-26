<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">박스인 TODOLIST </div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <TodoListItem  :itemTodo="listTodo"  @delete-item="deleteItem"  @completed-item="completedItem" />
<!--        <p @delete-item="deleteItem"></p>-->
        박스인 TodoList.vue=>> {{listTodo}}
      </div>
    </div>

  </div>
</template>

<script>

import TodoListItem from "./TodoListItem.vue";

export  default {
  name: 'TodoList',
  components: {TodoListItem},

  props : ['listTodo'], //밑에 data()에 다시 받을 필요없이, 위 템플렛에 바로 사용가능.

  data(){
    return {
        // id : listTodo.id,
        // todo: listTodo.todo,
        // completed: listTodo.completed
    }
  },
   methods:{
     deleteItem(item){
       console.table('  sent item>>>',  item);
       this.$emit('delete-item', item); // 자식 컴포넌트에서 이벤트를 발생시켜 부모 컴포넌트로 데이터 전달
     },
     completedItem(item){
       this.$emit('completed-item', item);
     }
   }
}
</script>