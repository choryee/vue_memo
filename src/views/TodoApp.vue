<template>
   <div id="app" class="container">
     <div class="card card-body bg-light">
       <div class="title">여긴 상위인 TODOAPP</div>
     </div>
     <div class="card card-default card-borderless">
       <div class="card-body">
         <InputTodo @add-todo="addTodo" />
         <TodoList :listTodo="todoList"  @delete-item="deleteItem" @completed-item="completedItem"/>
       </div>
     </div>
<!--       Show todos: <p v-for="todo in todoList" :key="todo.id">{{todo.id}}, {{todo.todo}}</p>-->
   </div>
</template>

<script>
import InputTodo from "./InputTodo.vue";
import TodoList from "./TodoList.vue";
// import todoList from "./TodoList.vue";
let ts = new Date().getTime();

export default {
  name: 'TodoApp',
  components: {InputTodo, TodoList},
  data(){
    return{
      todoList : [
        { id : ts, todo : '자전거타기', completed : false }
      ]
    }
  },
  methods:{
    addTodo(todo){
      if(todo.length>2){
        this.todoList.push({ id:new Date().getTime(), todo:todo, completed: false})
      }
    },
    deleteItem(item){
      console.log(' TodoApp.vue sent item >>>',  item);
       // for(let i=0; i<this.todoList.length; i++){
       //   if(item.id === this.todoList[i].id){
       //      this.todoList.filter(a=>{
       //        return  a.id !== item.id
       //      })
       //   }
       // }
      this.todoList= this.todoList.filter(a=> a.id !== item.id);
    },
    completedItem(item){
     //코드가 거의 완벽해 보입니다! 하지만 completedItem 메서드에서 map 대신에 forEach를 사용하는 것이 좀 더 적합합니다.
      // map은, 새로운 배열을 반환하기 때문에, 해당되는 (1개의 ) 배열을 수정하는 데 사용되지 않습니다.

      // this.todoList= this.todoList.map(a=> {
      //   if(a.id === item.id){
      //     a.id=item.id;
      //     a.todo=item.todo;
      //     a.completed=true;
      //   }
      // })
      this.todoList.forEach(a=>{
        if(a.id === item.id){
          a.completed = true;
        }
      })
    }
  }
}
</script>