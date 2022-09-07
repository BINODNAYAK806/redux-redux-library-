export const INC_COUNT = "INC_COUNT";
export const DEC_COUNT = "DEC_COUNT";
export const ADD_TODO = "ADD_TODO";

export const incCount =(data)=>({

type: INC_COUNT,
paylode : data,

});
export const decCount =(data)=>({

    type: DEC_COUNT,
    paylode : data,
    
    });

    export const addTodo =(data)=>({

        type: ADD_TODO,
        paylode : data,
        
        })