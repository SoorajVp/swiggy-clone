import React from "react";
import Image from "next/image";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";
import banner4 from "../../public/banner4.jpg";

const Banner = () => {
  return (
    <>
      <div className="flex overflow-y-auto px-7 md:justify-center gap-7 py-7 bg-slate-900  ">
        <Image src={banner1} className="w-24 lg:w-48" width={250} height={250} alt="logo"></Image>
        <Image src={banner2} className="w-24 lg:w-48" width={250} height={250} alt="logo"></Image>
        <Image src={banner3} className="w-24 lg:w-48" width={250} height={250} alt="logo"></Image>
        <Image src={banner4} className="w-24 lg:w-48" width={250} height={250} alt="logo"></Image>
      </div>
    </>
  );
};

export default Banner;
