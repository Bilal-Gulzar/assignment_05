import React from 'react'
import Image from 'next/image';
export default function Spotted() {
  return (
    <div className="mb-52">
      <h3 className="text-center break-words font-rye font-[400] font-Rye text-[50px] sm:text-[65px]  leading-[75px] sm:leading-[93.75px]">
        Spotted on
      </h3>
      <div className="lg:flex grid grid-cols-2 px-5 lg:px-0 gap-5 justify-between lg:gap-[80px] max-w-[900px] mt-14 mx-auto ">
        <div className="max-w-[417px]  ">
          <Image
            src="/Rectangle 67.png"
            width={500}
            height={500}
            alt="Rectangle"
          />
        </div>
        <div className="max-w-[417px]">
          <Image
            src="/Rectangle 68.png"
            width={500}
            height={500}
            alt="Rectangle"
          />
        </div>
        <div className="max-w-[417px]">
          <Image
            src="/Rectangle 69.png"
            width={500}
            height={500}
            alt="Rectangle"
          />
        </div>
      </div>
      <div>
        <div className="max-w-[1920px] flex-wrap lg:flex-nowrap lg:h-[288px] mx-auto mt-32 flex justify-center  gap-12 lg:gap-7 xl:gap-14 2xl:gap-20 px-7  ">
          <div className=" text-center flex  gap-6 flex-col items-center">
            <Image
              src="/test-2-1.jpg (1).png"
              width={120}
              height={120}
              alt="test-2-1"
              className="rounded-full"
            />
            <div className="">
              <div className="font-[400]  font-playfair flex text-[14px] flex-col gap-2  leading-[21.6px] ">
                Ann Smith
                <span className="text-[#666666] font-lato">CEO & Founder</span>
              </div>
              <p className="font-[500] max-w-[536px] mt-2 text-[18px] leading-[24px] ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies metus eu euismod tincidunt. Aliquam sit amet sapien
                non nisl tempor convallis eu in enim.”
              </p>
            </div>
          </div>
          <div className=" text-center flex  gap-6 flex-col items-center">
            <Image
              src="/test-3-1.jpg (1).png"
              width={120}
              height={120}
              alt="test-3-1"
              className="rounded-full"
            />
            <div className="">
              <div className="font-[400]  font-playfair flex text-[14px] flex-col gap-2  leading-[21.6px] ">
                Edison
                <span className="text-[#666666] font-lato">Designer</span>
              </div>
              <p className="font-[500] max-w-[536px] mt-2 text-[18px] leading-[24px] ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies metus eu euismod tincidunt. Aliquam sit amet sapien
                non nisl tempor convallis eu in enim.”
              </p>
            </div>
          </div>
          <div className=" text-center flex  gap-6 flex-col items-center">
            <Image
              src="/test-2-1.jpg (1).png"
              width={120}
              height={120}
              alt="test-3-1"
              className="rounded-full"
            />
            <div className="">
              <div className="font-[400]  font-playfair flex text-[14px] flex-col gap-2  leading-[21.6px] ">
                Edison
                <span className="text-[#666666] font-lato">Designer</span>
              </div>
              <p className="font-[500] max-w-[536px] mt-2 text-[18px] leading-[24px] ">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ultricies metus eu euismod tincidunt. Aliquam sit amet sapien
                non nisl tempor convallis eu in enim.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
