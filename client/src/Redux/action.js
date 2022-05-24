export const ADD_USER = 'ADD_USER';
export const ADD_BACKGROUND = 'ADD_BACKGROUND';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_ARTISTS = 'ADD_ARTISTS';
export const ADD_SONGS = 'ADD_SONGS';

export const addUser = (payload)=>({type:ADD_USER, payload});
export const addBackground = (payload)=>({type:ADD_BACKGROUND, payload});
export const addToken = (payload)=>({type:ADD_TOKEN, payload});
export const addArtists = (payload)=>({type:ADD_ARTISTS, payload});
export const addSongs = (payload)=>({type:ADD_SONGS, payload});
