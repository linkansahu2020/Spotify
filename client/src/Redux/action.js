export const ADD_USER = 'ADD_USER';
export const ADD_BACKGROUND = 'ADD_BACKGROUND';
export const ADD_TOKEN = 'ADD_TOKEN';

export const addUser = (payload)=>({type:ADD_USER, payload});
export const addBackground = (payload)=>({type:ADD_BACKGROUND, payload});
export const addToken = (payload)=>({type:ADD_TOKEN, payload});
