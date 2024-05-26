<template>
    <div class="memo">
        <Header/>
        <div class="btn-add">
            <button class="btn btn-primary" @click="add">+ 추가</button>
        </div>
      <br/>
        <ul>
<!--            <li v-for="(d,idx) in state.data" :key="idx" @click="edit(idx)" > {{ d }}</li>-->
            <li class="memo-li" v-for="d in state.data" :key="d.id" @click="edit(d.id)" >
              <span>{{ d.content }}</span>
              <button class="btn btn-warning">삭제</button>
            </li>
        </ul>
        <Footer/>
    </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import {reactive} from 'vue';
import axios from "axios";

 export default{
    components:{Header, Footer},
    setup(){
         // data:['메모 1내용', '메모 2내용']
        const state = reactive({
           data:[]
        })
        //const data=['메모 1내용', '메모 2내용'];
        const add = ()=>{
           // state.data.push('added data');

          const content=prompt('Enter content plz..')
           axios.post("/api/memos", {content:content})
            .then(res=>{
            console.log(' post res.data>>', res.data);
            state.data=res.data;
        })
        }

        //const edit=(idx)=>{
        const edit=(id)=>{ // mariaDB에서 테이터를 받는 것로 수정후, 여기  변겨함.
          console.log(' id >>>', id  );
          //const content=prompt('enter content plz', state.data[id])
          const content=prompt('enter content plz', state.data.find(d=>d.id === id).content)
          console.log('  content>>>',  content);
          axios.put('/api/memos/'+id, {content})
              .then(res=>{
                state.data=res.data;
              })
        }

        axios.get("/api/memos")
        .then(res=>{
            console.log('get res.data>>', ...res.data);
          state.data=res.data;
        })


        return {state, add, edit}
    } //setup()
 }
</script>

<style lang="scss" scoped>
*{
  margin: 20px  20px 20px 20px;
}
.memo ul{
    list-style: none;
    padding: 15px 0;
    margin: 0;
    li{
        //padding: 1px;
        margin: 20px;
        height: 20px;
        //background-color: orange;
        //border: 1px solid rebeccapurple;
    } 
}
.btn-add{
    text-align: right;
    padding: 10px 10px ;
}
.memo-li{
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  //justify-content:space-between;
}

</style>