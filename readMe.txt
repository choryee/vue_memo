
조현영, vue game강의


landmine 8-6강, 10'00까지만 들음.
그 이후 들어야(어려움.)

store.js를 사용할때 마다, main.ts의 import store from './views-landMine/storeMine'
부분을 변경해야.

jQuery나 JS는 데이터가 변경된 것도 코드로 만들어야 하고, 그에 따른 화면 변경도 또 해야 한다.
하지만, react,vue등은 데이터 변경만 코드로 만들어주면, 화면을 자동으로 변경해준다. 이게, 그 프레임워크쓰는 이유중 하나.

------
=>:class="state", @click="onClickChange"등 따옴표 ""안에 넣은 것들은, data()나 methods:에 있는 것들이다.
그리고, 그 따옴표안에는 JS문법도 사용해도 작동한다. 예)삼항연산자등.
위는 {{result}}에서도 사용가능.
=> :은 v-bind의 축약형이다. :class="", :style="", :number="winBalls" 밑에 있음.

4-5강.
>>>>>>>>>>>>>>> computed와 v-show, template설명  <<<<<<<<<<<<<<<< 검색하라

5-2강. 가위바위보
 <div id="computer" :class="{state:true, hello:false}" :style="{backgroundImage:'', fontSize:'14px'}"></div>
:class와 :style만 독특하게, {}객체형식으로도 넣을 수 있다.

<span :class="{ 'middle-line': item.completed }">{{ item.todo }}</span>
-> item.completed이게 참이면, .class='middle-line'가 생겼다 안 생겼다 동적으로 클래스-바인딩 됨.

<span :class="{ 'middle-line': item.completed }">{{ item.todo }}</span>


PascalCase : WordRelay
camelCase : wordRelay
kebab-case : word-relay

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
1-2강.
:class="state", @click="onClickChange"등 따옴표 ""안에 넣은 것들은, data()나 methods:에 있는 것들이다.

1-4강.
ref
<input type="text" ref="answer"/> <--vue에서 이 태그input의 이름 혹은 지칭하게 하는 것.
this.$refs.answer 처럼 this.$refs로 접근한다.

3-1,3-2,3-3 웹팩관련 강의 안들음.

3-4. 숫자야구.


4-2.반응속도
<div id="screen" :class="state" @click="changeColor">{{message}}</div>
위의 class가 바뀔때마다, 배경색이 바뀌는등 처리등, vue에서는 '바뀌는 것'을 '데이터'로 만들어서 사용해 바꾸어야.

 data(){
    return {
      result:[],
      state:'waiting',
      message:'클릭해서 시작하세요'
    }
  },
---
 // const screen=document.querySelector('#screen');
      // screen.addEventListener('click', (e)=>{
      // console.log(' changeColor >>>',  );
      // })
 vue에서는 위 처럼, JS의  addEventListener로 만드는게 아니라, @click="onClickScreen"되는 것.
--
let startTime=0;
let endTime=0;
let timeOut=null;는 왜 data()로 관린 안 하나? <- 화면에 표시 안 되는 것은, 테이터로 관리x.

--
4-5강.
>>>>>>>>>>>>>>> computed와 v-show, template설명  <<<<<<<<<<<<<<<<

<div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
<div>result : {{result.reduce((a,b)=>a+b,0)/result.length}}</div>
이렇게 계산은 텍스트넣는 곳에서 하지말고, computed를 사용하라.
>>computed를 사용하는 이유? {{message}}만 바뀌어도, 밑의 계산이 다시 되므로, 성능상에 문제되므로.
computed에 넣은 계산은 캐싱되어, 이전 계산된것을 그대로 가져와, 성능 ok됨.

** <div v-show="result.length">와 <div v-if="result.length">의 차이
<div v-show="result.length">는 display="none"이 되고, <div v-if="result.length">하면,
아예 주석처리되어짐. <--해보고, elements에서 확인해보라.
<div v-if="result.length">를 많이 사용한다고 함.

별 역할이 없는 <div></div>는 <template></template>로 치환가능.
그러면, <template>는 없는 태그로 된다.
근데, 최상의 <template>바로 밑은 <template>를 사용 불가.
-------------

5-2강. 가위바위보
 <div id="computer" :class="{state:true, hello:false}" :style="{backgroundImage:'', fontSize:'14px'}"></div>
:class와 :style만 독특하게, {}객체형식으로도 넣을 수 있다.
--> :은 v-bind의 축약형이다.

- created(){} 설명함. 07'20.
-> data(){result:0}에 있는 값을 태그안에 {{result}}에 다 채워 넣는 상태. 근데, 그 태그가 아직 화면에 보이기 전.

----------------
6-2. 로또.
- props설명 있음.

 components: { //LottoBall <-파스칼케이스로 쓰면, lotto-ball의 케밥케이스로 뷰가 자동으로 바꾸어줌..그래서,
    'lotto-ball' : LottoBall
  },
-
 components: {// 위와 같은 것.
    LottoBall
  },
--
switch (this.number){
      case this.number<=10:
        background='red';
        break;
switch문은 위 처럼 비교할때 보통 쓰지 않는다. 아래 처럼 굳이 쓸려면 바뀌어야.

 switch (Math.floor(this.number / 10)){
      case 0:
        background='red';
        break;
--
6-4강. watch.

----------
7-3강
// this.$set.tableData 7-3강, 08'19 <--이차원배열을 인덱스로 직접 바뀌면, vue가 인식 못함.




------------
TodoApp

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

이 구문은 `item.completed`가 `true`일 때만, 해당 요소에 `middle-line`이라는 클래스를 추가합니다.
즉, `item.completed`가 참이면 해당 요소에 `middle-line` 클래스가 적용되어 중간에 줄이 그어지게 됩니다.

이것은 조건부 클래스 바인딩을 가능하게 하며, 상태에 따라 요소의 스타일을 동적으로 변경할 수 있습니다.

--------



