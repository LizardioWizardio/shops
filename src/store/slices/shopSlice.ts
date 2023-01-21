import {IShopInfo} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ShopState {
    loading: boolean,
    error: string,
    shops: IShopInfo[]
}

const initialState: ShopState = {
    loading: false,
    error: '',
    shops: []
}

export const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IShopInfo[]>) {
            state.loading = false;
            state.shops = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message
        }
    }
})

export default shopSlice.reducer