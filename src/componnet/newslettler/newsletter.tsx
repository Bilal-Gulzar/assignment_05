import React from 'react'
import Image from 'next/image';

function Newsletter() {
  return (
    <div className="mb-36">
      <h3 className="text-center break-words font-rye font-[400] font-Rye text-[50px] sm:text-[65px]  leading-[75px] sm:leading-[93.75px]">
        Purity on Instagram
      </h3>
      <div className="max-w-[1100px] lg:flex  grid grid-cols-2 sm:grid-cols-3 px-5 lg:px-1 gap-12 mt-16 mx-auto">
        <div>
          <Image
            src="/Component 13.png"
            width={250}
            height={250}
            alt="ComponentImg"
            className="rounded-[8px]"
          />
        </div>
        <div>
          <Image
            src="/Component 14.png"
            width={250}
            height={250}
            alt="ComponentImg"
            className="rounded-[8px]"
          />
        </div>
        <div>
          <Image
            src="/Component 15.png"
            width={250}
            height={250}
            alt="ComponentImg"
            className="rounded-[8px]"
          />
        </div>
        <div>
          <Image
            src="/Component 15 (1).png"
            width={250}
            height={250}
            alt="ComponentImg"
            className="rounded-[8px]"
          />
        </div>
        <div>
          <Image
            src="/Component 15.png"
            width={250}
            height={250}
            alt="ComponentImg"
            className="rounded-[8px]"
          />
        </div>
      </div>
      <div className="flex justify-center  gap-7 max-w-[900px]   mx-auto flex-col mt-20">
        <h3 className="text-center break-words font-rye font-[400] font-Rye text-[50px] sm:text-[65px]  leading-[75px] sm:leading-[93.75px] px-4 sm:px-8 lg:px-0">
          Newsletter
        </h3>
        <p className="text-[#666666] text-2xl px-4  sm:text-[30px] leading-[36.5px] text-center">
          Sign-up to receive 10% off your next purchase. Plus hear about new
          arrivals and offers.
        </p>
        <div className="flex gap-5 mt-8 lg:px-0 px-3 sm:px-10 relative ">
          <input
            type="email"
            placeholder="Email Address"
            className="max-w-[717px] flex-grow h-[57px] placeholder:text-[#A29875] text-xl sm:text-[30px] md:text-center text-start px-5 rounded-[10px] border-2 border-[#A29875] outline-none"
            autoComplete="off"
          />
          <button className="w-[247px] md:block hidden h-[57px] text-[30px]  text-white rounded-[10px] bg-[#A29875]">
            Subscribe
          </button>
          <button className="md:hidden h-[57px] px-4 sm:px-10 rounded-l-[15px] absolute top-0  right-2 sm:right-10 sm:text-2xl text-xl  tracking-wider text-white rounded-[10px] bg-[#A29875]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter