//7-6강. vuex <--이게 store의미.

import Vuex from 'vuex'
// import Vue from 'vue'

export const SET_WINNER='SET_WINNER';
export const  CLICK_CELL='CLICK_CELL';
export const CHANGE_TURN='CHANGE_TURN';

// Vue.use(Vuex);
export default new Vuex.Store({
    state:{ // vue의 data와 비슷
        tableData : [
            ['','',''],
            ['','',''],
            ['','',''],
        ],
        turn : 'o',
        winner: ''

    },
    mutations:{ // vue의 computed와 비슷. data나 state를 바꿀때는 mutations으로 바꾸어야.
        // [SET_WINNER](state, winner){
        //     state.winner=winner;
        // },
        // [CLICK_CELL](state, {row, cell} ){ // {row, cell} =data구조분해할당.
        //     //state.tableData[row][cell] = state.turn;
        //     Vue.set(state.tableData[row], cell, state.turn); // row의 cell번째에 state.turn 셋하기. 7-7, 16'39
        // },
        // [CHANGE_TURN](state){
        //     state.turn= state.turn ==='o' ? 'x' :'o';
        // }
        click_cell(state, row, cell ){
            state.tableData[row][cell] = state.turn;
        }
    },
    getters:{// state를 수정할 때 사용. 동기적으로

    },
    actions:{//비동기를 사용할때. 여러 뮤테이션을 연달아 사용할때.

    }

})