export const ADD_USER = 'ADD_USER';
export const ADD_BACKGROUND = 'ADD_BACKGROUND';
export const ADD_TOKEN = 'ADD_TOKEN';
export const ADD_ARTISTS = 'ADD_ARTISTS';
export const ADD_SONGS = 'ADD_SONGS';
export const ADD_CURRENTPLAYING = 'ADD_CURRENTPLAYING';
export const ADD_CURRENTPLAYINGLIST = 'ADD_CURRENTPLAYINGLIST';
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_INDEX = 'ADD_INDEX';

export const addUser = (payload)=>({type:ADD_USER, payload});
export const addBackground = (payload)=>({type:ADD_BACKGROUND, payload});
export const addToken = (payload)=>({type:ADD_TOKEN, payload});
export const addArtists = (payload)=>({type:ADD_ARTISTS, payload});
export const addSongs = (payload)=>({type:ADD_SONGS, payload});
export const addCurrentPlaying = (payload)=>({type:ADD_CURRENTPLAYING, payload});
export const addCurrentPlayingList = (payload)=>({type:ADD_CURRENTPLAYINGLIST, payload});
export const addLocation = (payload)=>({type:ADD_LOCATION, payload});
export const addIndex = (payload)=>({type:ADD_INDEX, payload});
