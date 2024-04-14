//7-6강. vuex <--이게 store의미.

// import Vuex from 'vuex'
// import Vue from 'vue'

import { createStore } from 'vuex'
export const SET_WINNER='SET_WINNER';
export const  CLICK_CELL='CLICK_CELL';
export const CHANGE_TURN='CHANGE_TURN';


export default createStore({
    state : { // vue의 data와 비슷
        tableData : [
            ['','',''],
            ['','',''],
            ['','',''],
        ],
        turn : 'o',
        winner: 'winner is test...'

    },
    mutations:{ //  state안의 데이터들을 바꿀때는 mutations으로 바꾸어야.
        // [SET_WINNER](state, winner){
        //     state.winner=winner;
        // },
        // [CLICK_CELL](state, {row, cell} ){ // {row, cell} = data구조분해할당.
        //     //state.tableData[row][cell] = state.turn;
        //     Vue.set(state.tableData[row], cell, state.turn); //7-7, 16'39
        // },
        // [CHANGE_TURN](state){
        //     state.turn= state.turn ==='o' ? 'x' :'o';
        // }
        click_cell(state, {row, cell}  ){
            console.log('state is',state ,'click_cell mutation called with row:', row, 'and cell:', cell);
            //state.tableData[2][2] = 'o';
            console.log(' state.turn>>>', state.turn);
            state.tableData[row][cell] = state.turn;
            state.turn = state.turn === 'o' ? 'x' : 'o';
            console.log(' state.turn 11 >>>', state.turn);
        }
    },
    getters:{// vue의 computed와 비슷. state을 이용해 추가적으로 더 작업 때 사용. 동기적으로. 7-9깅,07'21
        turnMessage(state){
            return state.turn+'님이 승리했습니다.';
        }
    },
    actions:{//비동기를 사용할때. 여러 뮤테이션을 연달아 사용할때.

    }

})