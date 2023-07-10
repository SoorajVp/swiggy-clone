import React from 'react'
import Image from 'next/image';
import { CLOUDINARY_URL } from '@/api/apiUrls';
import logo from '../../../public/logo-name.png'
import Link from 'next/link';

const imageId = 'Lunch1_vlksgq'

const LoginPage = () => {
  return (
    <div className='h-screen w-full'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className='text-sm font-semibold lg:ml-24 px-20 pt-20'>
          <div className='flex justify-between '>
            <Image src={logo}  width={170} height={50} ></Image>
            <div>
            <Link href='/'>
            <button className='px-5'>Login</button>
            <button className='text-white bg-black py-2 px-5'>Sign up</button>
            </Link>
            </div>

          </div>

          <h1 className='text-3xl mt-10'>Cooking gone wrong?</h1>
          <h2 className='text-base mt-2 text-gray-600'>Order food from favourite restaurant near you.</h2>

          <div className='mt-10 flex  border-gray-950 '>
            <input type="text" className='p-2 w-full border border-solid ' placeholder='Enter your delivery loaction' />
             
             <Link href='/' className='py-2 pt-3 pl-4 px-3 w-32 bg-orange-600 text-white text-xs'> FIND FOOD </Link>
          </div>

          <div className='mt-4'>
          <h1 className='text-sm text-gray-400 font-normal'>POPULAR CITIES IN INDIA</h1>
          <h2 className='text-xs text-gray-500 mt-1'>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more .</h2>
          </div>


        </div>
        <div className='hidden md:block'>
          <Image src={CLOUDINARY_URL+imageId} className='h-full w-full' width={400} height={600} ></Image>
        </div>
      </div>
      <div className='w-full h-10 bg-slate-700'></div>
    </div>
  )
}

export default LoginPage;