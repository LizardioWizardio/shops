import React from 'react';
import {IShopInfo} from "../models/models";

interface ShopCardProps {
    shop: IShopInfo
}

function ShopCard({shop}: ShopCardProps) {
    return (
        <div className="border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">
            <p className="text-lg font-bold">{shop.name}</p>
            <p className="text-lg font-bold">{shop.country}</p>
            <p className="text-lg font-bold">{shop.ident}</p>
            <p className="text-lg font-bold">{shop.region}</p>
            <p className="text-lg font-bold">{shop.local_code}</p>
            <p className="text-lg font-bold">{shop.type}</p>
        </div>
    );
}

export default ShopCard;