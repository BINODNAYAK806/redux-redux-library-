//  const {createStore} = require("redux");

// const reducer =(state,action)=>{
    
//     // if(action.type=== "INC_COUNT"){

//     //     return {...state,count:state.count+action.paylode}
//     // }

//     // if(action.type=== "DEC_COUNT"){

//     //     return {...state,count:state.count-action.paylode}
//     // }

//     // return state;


//     switch(action.type){

//         case "INC_COUNT":{
//             return {...state,count:state.count+action.paylode}

//         }
//         case "DEC_COUNT":{
//             return {...state,count:state.count-action.paylode}

//         }
//         case "ADD_TODO":{
//             return {...state,todos:[...state.todos,action.paylode]}    


//         }
//         default:{

//             return state
//         }

//     }
    
// }

// class Store {

// constructor(reducer,initialState){
// this.reducer = reducer;
// this.state = initialState

// }
// getState(){

//     return this.state
// }
// dispatch(action){

//     this.state = this.reducer(this.state,action)
// }


// }



// const initState = {count :0 ,todos:[]}

// const store = createStore(reducer,initState)


import {store} from "./Redux/store.js"
import {incCount,decCount,addTodo} from "./Redux/action.js"


// console.log(store.getState())
// store.dispatch(incCount(500))
console.log(store.getState())
store.dispatch({type:"INC_COUNT" ,paylode:4})
store.dispatch(incCount(800))
console.log(store.getState())
store.dispatch(addTodo("binod"))
// store.dispatch({type:"INC_COUNT" ,paylode:4})
console.log(store.getState())
// store.dispatch({type:"DEC_COUNT" ,paylode:1})
// console.log(store.getState().count)
// store.dispatch({type:"ADD_TODO" ,paylode:"BINOD"})
// console.log(store.getState())
// store.dispatch({type:"ADD_TODO" ,paylode:"done"})
// console.log(store.getState())
// // store.dispatch({type:"ADD_TODO" ,paylode:{tiele:"binod",name:"binod"}})
// // console.log(store.getState())



