import Image from 'next/image';
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaPencilRuler } from "react-icons/fa";
import { BsFillBagPlusFill } from "react-icons/bs";

const Page = () => {
  return (
    <div className="bg-blue-950 min-h-screen text-white">
      {/*Header*/}
      <div className=" flex items-center justify-between p-[20px]">
        <h4 className="text-[20px] font-bold">Next JS</h4>
        <button className="bg-blue-300 py-2 px-9 font-bold rounded-xl hover:bg-blue-500">CV</button>
      </div>
      {/*section 2*/}
      <div className=' w-[50%] mx-auto text-center space-y-5'>
        <h2 className='mt-20 text-3xl text-blue-400 font-bold'>John Wick</h2>
        <h4 className='text-xl font-bold'>Actor and Artist</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>

        <div className='w-[250px] flex justify-between  items-center mx-auto'>
          <FaSquareFacebook className='text-3xl' />
          <IoLogoYoutube className='text-3xl' />
          <FaLinkedin className='text-3xl' />

        </div>
        <Image src="/images/img1.jpg" className='mx-auto rounded-full ' height={300} width={300}/>
      </div>
      {/*section 3*/}
      <div className='px-20 space-y-7 my-20'>
        <h4 className='text-white text-2xl font-bold'>Services I offer</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>

        {
          /*cards*/
        }
        <div className='flex justify-evenly'>
          <div className='w-[25%]  bg-white text-black rounded-lg p-6 flex flex-col items-center gap-5 text-center'>
            <FaPencilRuler className='text-3xl' />
            <h4 className=' text-xl font-bold'>Dummy Text</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <h4 className=' text-xl font-bold'>Dummy Text</h4>
          </div>
          <div className='w-[25%]  bg-white text-black rounded-lg p-6 flex flex-col items-center gap-5 text-center'>
            <IoMdSettings className='text-3xl' />

            <h4 className=' text-xl font-bold'>Dummy Text</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h4 className=' text-xl font-bold'>Dummy Text</h4>
          </div>
          <div className='w-[25%]  bg-white text-black rounded-lg p-6 flex flex-col items-center gap-5 text-center'>
            <BsFillBagPlusFill className='text-3xl' />
            <h4 className=' text-xl font-bold'>Dummy Text</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <h4 className=' text-xl font-bold'>Dummy Text</h4>
          </div>
        </div>
      </div>
      {/*section 4*/}
      <div className='px-20 space-y-5 my-28'>
        <h4 className='text-white text-2xl font-bold'>Services I offer</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor</p>
        {/*pictures*/}
        <div className="flex flex-wrap items-center gap-11  justify-center">
          <img src="/images/image6.jpg"  alt="Image 1" className='w-[35%] ' height={200}  />
          <img src="/images/image6.jpg"  alt="Image 2" className='w-[35%] ' height={200}  />
          <img src="/images/image6.jpg"  alt="Image 3" className='w-[35%] ' height={200}/>
          <img src="/images/image6.jpg"  alt="Image 4" className='w-[35%] ' height={200}/>
          <img src="/images/image6.jpg"  alt="Image 5" className='w-[35%] ' height={200}/>
          <img src="/images/image6.jpg"  alt="Image 6" className='w-[35%] ' height={200}/>
        </div>
      </div>
    </div>
  )
}

export default Page
