import { ADD_ARTISTS, ADD_BACKGROUND, ADD_CURRENTPLAYING, ADD_CURRENTPLAYINGLIST, ADD_INDEX, ADD_LOCATION, ADD_SONGS, ADD_TOKEN, ADD_USER } from "./action";

const initialStore = {
    user: null,
    token: null,
    artists: null,
    songs: null,
    location: 'home',
    current_playing: {},
    current_playing_list: [],
    index: null,
    background: 'darkslategray',
}

export const reducer = ( store = initialStore, { type,payload }) => {
    switch(type){
        case ADD_USER:
            return {...store, user:payload};
        case ADD_BACKGROUND:
            return {...store, background:payload};
        case ADD_TOKEN:
            return {...store, token:payload};
        case ADD_ARTISTS:
            return {...store, artists:payload};
        case ADD_SONGS:
            return {...store, songs:payload};
        case ADD_CURRENTPLAYING:
            return {...store, current_playing:payload};
        case ADD_CURRENTPLAYINGLIST:
            return {...store, current_playing_list:payload};
        case ADD_LOCATION: 
            return {...store, location:payload}
        case ADD_INDEX: 
            return {...store, index:payload}
        default:
            return store;
    }
}