import axios from "../../axios";
import {AppDispatch} from "../index";
import {IShopInfo} from "../../models/models";
import {shopSlice} from "../slices/shopSlice";

export const fetchShops = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(shopSlice.actions.fetching())
            const response = await axios.get<IShopInfo[]>('shops')
            dispatch(shopSlice.actions.fetchSuccess(response.data))
        }
        catch (e) {
            dispatch(shopSlice.actions.fetchError(e as Error))
        }
    }
}