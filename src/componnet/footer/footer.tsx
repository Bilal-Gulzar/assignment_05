import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#a29875] w-screen">
      <div className=" py-32 max-w-[1920px] lg:justify-center  items-center sm:items-baseline flex flex-col md:flex-row sm:grid sm:grid-cols-2 md:flex md:flex-wrap xl:flex-nowrap mx-auto gap-24 2xl:gap-44 xl:gap-32  px-20">
        <div className="flex flex-col gap-7 ">
          <h2 className="font-[500] text-white text-[30px] text-center sm:text-start">MY&nbsp;ACCOUNT</h2>
          <div className="flex flex-col font-lato gap-3 items-center sm:items-start ">
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Career at Eldy
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              About us
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Sustainability
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">Press</div>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h2 className="font-[500] text-center sm:text-start text-white text-[30px]">
            HELP
          </h2>
          <div className="flex flex-col gap-3 font-lato items-center sm:items-start ">
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">FAQ</div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Shipping
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Returns
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Order&nbsp;Status
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          <h2 className="font-[500] text-center sm:text-left text-white text-[30px]">
            follow&nbsp;us&nbsp;on
          </h2>
          <div className="flex flex-col font-lato gap-3 items-center sm:items-start ">
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Twitter
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Facebook
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Google Plus
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              Instagram
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7  ">
          <h2 className="font-[500] text-white text-center sm:text-left text-[30px]">
            About us
          </h2>
          <div className="flex flex-col gap-3 font-lato items-center sm:items-start ">
            <div className="font-[600] break-all  text-[22px] text-[#FFFFFF99]">
              <span className="text-black">Email:</span>
              &nbsp;purity_jewel@gmail.com
            </div>
            <div className="font-[600] text-[22px] text-[#FFFFFF99]">
              <span className="text-black">Phone:</span>&nbsp;0987654321
            </div>
          </div>
        </div>
      </div>
      <div className="h-[64px] bg-[#504933] w-screen mx-auto"></div>
    </footer>
  );
}

export default Footer