import React, {useEffect} from 'react';
import ShopSearch from "../components/ShopSearch";
import ShopFilter from "../components/ShopFilter";
import ShopCard from "../components/ShopCard";
import {fetchShops} from "../store/actions/shopActions";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

function MainPage() {
    const dispatch = useAppDispatch()
    const {error, loading, shops} = useAppSelector(state => state.shop)

    useEffect(() => {
        dispatch(fetchShops())
    }, [dispatch])

    return (
        <div className="container mx-auto max-w-[760px] pt-5 text-center">
            <ShopSearch />
            <ShopFilter />

            {loading && <p className="text-center text-3xl">Loading data...</p>}
            {loading && <p className="text-center text-3xl text-red-600">{error}</p>}
            {
                shops.map(shop => <ShopCard shop={shop} key={shop.id} />)
            }
        </div>
    );
}

export default MainPage;