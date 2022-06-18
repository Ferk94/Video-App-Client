
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';  
import updateUserInfo from '../reducers';

// const persistConfig = {
//     key: "root",
//     storage,
//     whiteList: ["userInfo", "infoValid", "loading"]
// }





// const reducers = persistReducer(persistConfig, index);

export const store = createStore(updateUserInfo, composeWithDevTools(applyMiddleware(thunk)))