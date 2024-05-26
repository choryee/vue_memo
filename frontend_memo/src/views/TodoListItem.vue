<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">개별 TODOLISTItem </div>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body" v-for="item in itemTodo" :key="item.id">

        <div class="item-container">
            <span :class="{ 'middle-line': item.completed }">{{ item.todo }}</span>
            <div class="button-container">
                <button @click="completed(item)">complete</button>
                <button @click="deleteItem(item)">Delete</button>
            </div>
        </div>

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
     // let ltems =  itemTodo;
     // console.log('  ltems>>>',  ltem);

      this.$emit('delete-item', item); // 자식 컴포넌트에서 이벤트를 발생시켜 부모 컴포넌트로 데이터 전달
    },
    completed(item){
      this.$emit('completed-item', item);
    },
    middleLine(){
      document.querySelector('#itemTodo').style.textDecoration = 'line-through';
    }
    }
  }

</script>

<style scoped>
.middle-line {
  text-decoration: line-through;
}

.item-container {
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
}

.button-container {
  margin-left: auto; /* 버튼을 오른쪽으로 정렬 */
}

.button-container button {
  margin-right: 0.5rem; /* 버튼 사이 간격 조정 */
}

</style>