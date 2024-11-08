import React from 'react'
import Image from 'next/image';
import Arrow from '../arrow';

function ShopByCategory() {
  return (
    <div className="px-7 ">
      <h2 className="text-center break-words font-rye font-[400] font-Rye text-[50px] sm:text-[65px]  leading-[75px] sm:leading-[93.75px]">
        Shop By Categories
      </h2>
      <div className="sm:flex hidden text-[30px]  md:text-[37px] lg:text-[52px] mt-12 gap-10 justify-center text-[#0000009E] font-[700]">
        <div>Earrings</div>
        <div>Necklace</div>
        <div>Bracelet</div>
        <div>Rings</div>
      </div>
        <Image src="/Frame 1.png" width={500} height={500} alt="category name" className='sm:hidden mt-4 mx-auto'/>
      <div className="flex flex-col gap-2 pt-4 ">
        <div className="flex items-center gap-2  2xl:mx-auto">
          <div className="max-w-[893px] bg-slate-600 ">
            <Image
              src="/Group 14230.png"
              width={893}
              height={581}
              alt="banner-17"
            />
          </div>
          <div className="w-[438px]  ">
            <Image
              src="/Component 1.png"
              width={438}
              height={581}
              alt="Component1"
            />
          </div>
          <div className="w-[438.38px]">
            <Image
              src="/Component 10.png"
              width={438.38}
              height={581.99}
              alt="banner-17"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 2xl:mx-auto ">
          <div className="w-[438.38px] ">
            <Image
              src="/Component 8.jpg"
              width={438}
              height={581}
              alt="Component 8.jpg"
            />
          </div>
          <div className="w-[438.38px]  ">
            <Image
              src="/banner-16.jpg.jpg"
              width={438}
              height={581}
              alt="banner-16.jpg.jpg"
            />
          </div>
          <div className="max-w-[893px] relative">
            <Image
              src="/banner-17.jpg.png"
              width={893}
              height={581.99}
              alt="banner-17.jpg.png"
            />
            <div className="absolute font-playfair lg:block hidden text-white bottom-12 left-14">
              <p className="text-[45px]">Unique Earrings</p>
              <button className="flex text-[20px] items-center gap-0.5">
                Shop Now
                <span>
                  <Arrow />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory