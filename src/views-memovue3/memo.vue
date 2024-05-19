<template>
    <div class="memo">
        <Header></Header>
        <div class="btn-add">
            <button class="btn btn-primary" @click="add">+ 추가</button>
        </div>
        <ul>
            <li v-for="(d,idx) in state.data" :key="idx" > {{ d }}</li>
        </ul>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
import {reactive} from 'vue';
import axios from "axios";

 export default{
    components:{Header},
    setup(){
        const state = reactive({
           // data:['메모 1내용', '메모 2내용']
           data:[]
        })
        //const data=['메모 1내용', '메모 2내용'];
        const add = ()=>{
           // state.data.push('added data');
           axios.post("/api/memos")
            .then(res=>{
            console.log(' post res.data>>', res.data);
            state.data.push(...res.data);
        })
            
        }

        axios.get("/api/memos")
        .then(res=>{
            
            console.log('get res.data>>', ...res.data);
            
            state.data.push(...res.data);
        })
        


        return {state,add}
    }
 }
</script>
<style lang="scss" scoped>
.memo ul{
    list-style: none;
    padding: 15px 0;
    margin: 0;
    li{
        padding: 15px;
        margin: 5px;
    } 
}
.btn-add{
    text-align: right;
    padding: 10px 10px ;
}   
</style>