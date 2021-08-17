import React from 'react';
import {rerenderEntireTree} from './../render';

let state = {
    dataBlock : [
        {id: 1, title: "list 1"},
        {id: 2, title: "list 2"},
        {id: 3, title: "list 3"}
      ],
    dataList : []
}

export let addList = (someList) => {
    // let newList = {
    //     id: 4,
    //     title: someList
    // }
    // state.dataBlock.push(newList);
    let newList = {
        valueL : someList,
    }
    state.dataList.push(newList);
    // if(dataList.length != 0) {
    //    let listItem =  
    // }
    rerenderEntireTree(state)
}

export default state;