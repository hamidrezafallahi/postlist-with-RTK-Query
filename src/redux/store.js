import {configureStore} from '@reduxjs/toolkit'
import {postApi} from './services/postApi'
const store = configureStore({
        reducer:{
            [postApi.reducerPath]:postApi.reducer
        },
        middleWare:(getDefaultMiddleware)=>
            getDefaultMiddleware().concat(postApi.middleware)
    });

export default store;