//7-6강. vuex <--이게 store의미.

// import Vuex from 'vuex'
// import Vue from 'vue'

import { createStore } from 'vuex'
// export const SET_WINNER='SET_WINNER';
// export const  CLICK_CELL='CLICK_CELL';
// export const CHANGE_TURN='CHANGE_TURN';

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, // 0 이상이면 다 opened
};

const plantMine = (row, cell, mine) => { //지뢰만들기
    console.log(row, cell, mine);
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    for (let k = 0; k < shuffle.length; k++) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }

    console.log(data);
    return data;
};

export default createStore({
    state : { // vue의 data와 비슷
        tableData : [],
        data:{ // row,cell,mine은 관련 있는 데이터라 data라는 같은 객체에 담아놈.
            row:0,
            cell:0,
            mine:0
        },
        timer: 0,
        result:''

    },
    mutations:{ //  state안의 데이터들을 바꿀때는 mutations으로 바꾸어야.
        //start_game(state, {row,cell,mine}){
        start_game(state, {row,cell,mine}){
            console.log('  start_game탐..>>>',  );
            // state.data.row=row;
            // state.data.cell=cell;
            // state.data.mine=mine;
            state.data={
                row,
                cell,
                mine
            };
            state.tableData=plantMine(row,cell,mine);
            state.timer=0;
        },
        open_cell(){

        },
        click_mine(){

        },
        flag_cell(){

        },
        question_cell(){

        },
        normalize_cell(){

        },
        increment_timer(){

        }


    },
    getters:{// vue의 computed와 비슷. state을 이용해 추가적으로 더 작업 때 사용. 동기적으로. 7-9깅,07'21

    },
    actions:{//비동기를 사용할때. 여러 뮤테이션을 연달아 사용할때.

    }

})