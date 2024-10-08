'use client'
import React, { useEffect, useState } from 'react'
import { RESTRUALIST_URL } from '@/api/apiUrls';
import RestaurantCard from './restaurantCard';
import Shimmer from './shimmer';

const RestaurantList = () => {

    const [ itemList, setItemList ] = useState([])
    useEffect(() => {
        getDatas()
    }, [])
    
    const getDatas = async () => {
        const response = await fetch(RESTRUALIST_URL)
        const json = await response.json();
        console.log("This is card data ", json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setItemList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(itemList)
    }

    if(itemList?.length === 0 ) {
        return <Shimmer />
    }

    return (
        <>
        <div className='justify-center flex'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 grid-flow-row mt-6 ">
            {
                itemList?.map((item) => {
                    return <RestaurantCard {...item?.info} key={item.id}/>
                })
            }
        </div>
        </div>
      </>
    )
}

export default RestaurantList;