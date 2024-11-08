import React from 'react'
import Image from 'next/image';

function Heroection() {
  return (
    <div className=" flex md:flex-row  items-center  flex-col md:justify-center m-[30px] sm:m-[50px] lg:mx-[135.01px] lg:my-[68px] md:h-[573.59px] gap-7 lg:gap-10 px-3 sm:px-0 ">
      <div className="flex flex-col gap-7 md:order-1 break-all sm:break-normal order-2">
        <h1 className="max-w-[472.97px]  sm:leading-[65.8px] leading-[52px] text-[32px] sm:text-[37.84px]">
          IMPECCABLE CRAFTSMANSHIP AND FINESSE
        </h1>
        <p className="text-[25px] sm:text-[29.24px]  text-[#99937e] max-w-[798.9px] leading-[40px] sm:leading-[48.1px] tracking-wide font-[500]">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="w-[247.67px] bg-[#A29875] rounded-[8.6px] h-[49.2px] text-white tracking-wide flex justify-center items-center font-[500] text-[25.8px] ">
          Explore Now
        </button>
      </div>

      <div className="max-w-[421.38px] md:h-[573.59px] md:order-2 order-1 ">
        <Image
          src="/mainImg.png"
          alt="makebase"
          width={380.1}
          height={573.59}
        />
      </div>
    </div>
  );
}

export default Heroection