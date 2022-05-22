import { ADD_BACKGROUND, ADD_TOKEN, ADD_USER } from "./action";

const initialStore = {
    user: null,
    token: null,
    background: 'darkslategray',
}

export const reducer = (store=initialStore,{type,payload})=>{
    switch(type){
        case ADD_USER:
            return {...store,user:payload};
        case ADD_BACKGROUND:
            return {...store,background:payload};
        case ADD_TOKEN:
            return {...store,token:payload};
        default:
            return store
    }
}