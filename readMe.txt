
store.js를 사용할때 마다, main.ts의 import store from './views-landMine/storeMine'
부분을 변경해야.


landmine 8-6강, 10'00까지만 들음.
그 이후 들어야(어려움.)


TodList만들기. 240406
원쌤의 Vue.js스타트 책. p.209.  구조 나온 그림을 보라.

구조.
TodoApp.vue
|
InputTodo.vue
+ TodoList.vue
      |
    TodoListItem.vue


---
구동은
npm run dev

각 vue안에 코드 주석은 '집 JS 정리.txt' 정리됨.

------------
// this.$set.tableData 7-3강, 08'19 <--이차원배열을 인덱스로 직접 바뀌면, vue가 인식 못함.




------------
사용한 문법.
props
 props : ['listTodo'], //이거 자식에서 받을때. 밑에 data()에 다시 받을 필요없이, 위 템플렛에 바로 사용가능.

$emit
<TodoListItem  :itemTodo="listTodo"(<-이건 props으로 부모->자식으로)  @delete-item="deleteItem"(<-이건 emit으로 자식->부모로)  @completed-item="completedItem"/>

<span :class="{ 'middle-line': item.completed }">{{ item.todo }}</span>
-> item.completed이게 참이면, .class='middle-line'가 생겼다 안 생겼다 동적으로 클래스-바인딩 됨.



<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">개별 TODOLISTItem </div>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body" v-for="item in itemTodo" :key="item.id" >
        <span>{{ item.todo }}</span>
        <button @click="deleteItem(item)">Delete</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['itemTodo'],
  data() {
    return {}
  },
  methods: {
    deleteItem(item) { // 수정: 메소드명 변경
      console.log('item >>>', item);
      //코드를 보니 deleteItem 메소드에서 itemTodo에 접근하려고 시도하고 있습니다.
      // 그러나 itemTodo는 props로 전달된 데이터이므로 직접 수정할 수 없습니다.
      // 또한, itemTodo를 let 키워드로 다시 정의하려고 시도하였는데, 이는 잘못된 접근입니다.
	  올바른 방법은 부모 컴포넌트에서 itemTodo 데이터를 수정하고 자식 컴포넌트에 변경된 데이터를 다시 전달하는 것입니다.
	  즉, 부모 컴포넌트에서 deleteItem 메소드를 호출하여 itemTodo 데이터를 수정하고, 수정된 데이터를 자식 컴포넌트에 다시 전달해야 합니다.
이를 위해 부모 컴포넌트에서 deleteItem 메소드를 정의하고 자식 컴포넌트로 전달하는 것이 좋습니다. 아래는 이러한 수정된 코드입니다:

      let ltems =  itemTodo;
      console.log('  ltems>>>',  ltems);

	  this.$emit('delete-item', item); // 자식 컴포넌트에서 이벤트를 발생시켜 부모 컴포넌트로 데이터 전달
    }
    }
  }
}
</script>

-------------

deleteItem(item){
      console.log(' TodoApp.vue sent item >>>',  item);
       // for(let i=0; i<this.todoList.length; i++){
       //   if(item.id === this.todoList[i].id){
       //      this.todoList.filter(a=>{
       //        return  a.id !== item.id
       //      })
       //   }
       // }

      this.todoList= this.todoList.filter(a=> a.id !== item.id); // 같지 않은 배열 요소만 제거해서, 배열을 만들때.
    },

---------------

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

--------------

텍스트에 중간 라인 줄려고 할때,
<span id="itemTodo" v-if="middleLine">{{ item.todo }}</span>

middleLine(){
  document.querySelector('#itemTodo').style.textDecoration = 'line-through';
}

deleteItem 메서드에서는 부모 컴포넌트로 데이터를 전달하기 위해 $emit을 사용하는 것이 올바른 방법입니다. 또한 middleLine 메서드에서는 스타일을 변경하기 위해 직접 DOM에 접근하는 것은 Vue.js의 방식과 맞지 않습니다.

Vue.js에서는 데이터 바인딩을 통해 상태를 변경하고 이에 따라 DOM이 자동으로 업데이트됩니다. 따라서 middleLine 메서드를 사용하여 스타일을 변경하는 대신 completed 속성을 사용하여 상태를 관리하는 것이 좋습니다.

그러므로 코드를 다음과 같이 수정할 수 있습니다:

<span :class="{ 'middle-line': item.completed }">{{ item.todo }}</span>

<style scoped>
.middle-line {
  text-decoration: line-through;
}
</style>
---------

:class="{ 'middle-line': item.completed }"
는 무슨 뜻인가?

`:class="{ 'middle-line': item.completed }"`은 Vue.js에서 클래스를 동적으로 바인딩하는 방법입니다.

이 구문은 `item.completed`가 `true`일 때만 해당 요소에 `middle-line`이라는 클래스를 추가합니다. 즉, `item.completed`가 참이면 해당 요소에 `middle-line` 클래스가 적용되어 중간에 줄이 그어지게 됩니다.

이것은 조건부 클래스 바인딩을 가능하게 하며, 상태에 따라 요소의 스타일을 동적으로 변경할 수 있습니다.

--------



