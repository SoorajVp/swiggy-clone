"use client";
import Image from "next/image";
import { CLOUDINARY_URL } from "@/api/apiUrls";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  costForTwoString,
}) => {
  return (
    <>
      <div className="p-1 h-52 w-48 text-gray-700 hover:border border-solid  ">
        <Image
          src={CLOUDINARY_URL + cloudinaryImageId}
          className="h-32"
          width={250}
          height={50}
          alt={name}
        ></Image>
        <h4 className="font-bold text-xs pt-1">{name}</h4>
        <div className="text-xs">{cuisines?.[0]}</div>
        <div className="text-xs py-2 flex justify-between">
          <h2 className="text-xs bg-green-500 text-white px-1">{avgRating}</h2>
          <h2 className="text-xs">{sla?.deliveryTime} Mins</h2>
          <h2 className="text-xs">{costForTwoString}</h2>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
