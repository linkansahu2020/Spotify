import { ADD_BACKGROUND, ADD_USER } from "./action";

const initialStore = {
    user: null,
    background: 'darkslategray',
}

export const reducer = (store=initialStore,{type,payload})=>{
    switch(type){
        case ADD_USER:
            return {...store,user:payload};
        case ADD_BACKGROUND:
            return {...store,background:payload};
        default:
            return store
    }
}