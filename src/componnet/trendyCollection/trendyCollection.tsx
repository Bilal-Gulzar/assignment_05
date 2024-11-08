import React from 'react'
import Image from 'next/image';

function TrendyCollection() {
  return (
    <div className="px-7 mb-5">
      <h2 className="text-center break-words font-rye font-[400] font-Rye text-[50px] sm:text-[65px]  leading-[75px] sm:leading-[93.75px]">
        Trendy Collection
      </h2>
      <div className="lg:flex grid grid-cols-2 gap-9 lg:gap-12 mt-14 justify-center ">
        <div className="flex  max-w-[375px] flex-col">
          <div className="rounded-[10px]">
            <Image
              src="/Component 17.jpg"
              width={375}
              height={479}
              alt="Component 17.jpg"
            />
          </div>
          <p className="text-[#938965] text-xl mt-7 sm:mt-10 sm:text-[27px]">Cable Chain Chokar</p>
          <p className="text-[#938965] text-xl sm:text-[27px] text-right">₹20,000</p>
        </div>
        <div className="flex max-w-[375px] flex-col">
          <div className="rounded-[10px]">
            <Image
              src="/Component 23.jpg"
              width={375}
              height={479}
              alt="/Component 23.jpg"
            />
          </div>
          <p className="text-[#938965]  mt-7 sm:mt-10 text-[27px]">Link Chain Earrings</p>
          <p className="text-[#938965]  text-xl sm:text-[27px] text-right">₹20,000</p>
        </div>
        <div className="flex max-w-[375px] flex-col">
          <div className="rounded-[10px]">
            <Image
              src="/Component 21.png"
              width={375}
              height={479}
              alt="Component 21.png"
            />
          </div>
          <p className="text-[#938965]  mt-7 sm:mt-10 text-[27px]">Yona Signet Ring</p>
          <p className="text-[#938965] text-xl sm:text-[27px] text-right">₹20,000</p>
        </div>
        <div className="flex max-w-[375px] flex-col">
          <div className="rounded-[10px]">
            <Image
              src="/Component 22.png"
              width={375}
              height={479}
              alt="Component 22.png"
            />
          </div>
          <p className="text-[#938965]  mt-7 sm:mt-10 text-[27px]">Anna Ribbed Bangle</p>
          <p className="text-[#938965]  text-xl sm:text-[27px] text-right">₹20,000</p>
        </div>
      </div>
    </div>
  );
}

export default TrendyCollection