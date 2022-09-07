
  export const reducer =(state,action)=>{
    
    // if(action.type=== "INC_COUNT"){

    //     return {...state,count:state.count+action.paylode}
    // }

    // if(action.type=== "DEC_COUNT"){

    //     return {...state,count:state.count-action.paylode}
    // }

    // return state;


    switch(action.type){

        case "INC_COUNT":{
            return {...state,count:state.count+action.paylode}

        }
        case "DEC_COUNT":{
            return {...state,count:state.count-action.paylode}

        }
        case "ADD_TODO":{
            return {...state,todos:[...state.todos,action.paylode]}    


        }
        default:{

            return state
        }

    }
    
}
