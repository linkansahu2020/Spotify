import { ADD_ARTISTS, ADD_BACKGROUND, ADD_SONGS, ADD_TOKEN, ADD_USER } from "./action";

const initialStore = {
    user: null,
    token: null,
    artists: null,
    songs: null,
    background: 'darkslategray',
}

export const reducer = ( store = initialStore, { type,payload }) => {
    switch(type){
        case ADD_USER:
            return {...store,user:payload};
        case ADD_BACKGROUND:
            return {...store,background:payload};
        case ADD_TOKEN:
            return {...store,token:payload};
        case ADD_ARTISTS:
            return {...store,artists:payload};
        case ADD_SONGS:
            return {...store,songs:payload};
        default:
            return store;
    }
}