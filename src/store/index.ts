import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shopReducer from './slices/shopSlice'

const rootReducer = combineReducers({
    shop: shopReducer
})

export function setupStore () {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']