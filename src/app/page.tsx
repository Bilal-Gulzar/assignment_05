import Image from "next/image";
import Header from "@/componnet/header/header";
import Heroection from "@/componnet/herosection/heroection";
import ShopByCategory from "@/componnet/shopByCategory/shopByCategory";
import Svg1 from "@/componnet/svg1";
import Svg2 from "@/componnet/svg2";
import Svg3 from "@/componnet/svg3";
import TrendyCollection from "@/componnet/trendyCollection/trendyCollection";
import Spotted from "@/componnet/spotted/spotted";
import Newsletter from "@/componnet/newslettler/newsletter";
import Footer from "@/componnet/footer/footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Heroection />
      <ShopByCategory />
      <div className="max-w-[1920px] xl:mx-auto lg:h-[300.59px] mx-5 lg:mx-0 mb-20 lg:mb-0 flex-wrap mt-24 flex justify-center gap-5  xl:gap-20">
        <div className=" text-center flex border lg:border-none lg:shadow-none shadow-md lg:justify-start justify-center  gap-6 flex-col items-center py-10 lg:py-0">
          <Svg1 />
          <div className="">
            <h3 className="font-[700] text-[20px] leading-[21.6px] ">
              Shipping Worldwide
            </h3>
            <p className="font-[500] font-playfair w-[306px] mt-2 text-[18px] leading-[24px] ">
              Lorem ipsum dolor sit amet, <br />
              consectetur
              <br /> adipiscing elit
            </p>
          </div>
        </div>
        <div className=" text-center py-10 lg:py-0 border lg:border-none lg:shadow-none shadow-md lg:justify-start justify-center flex  gap-6 flex-col items-center">
          <Svg3 />
          <div>
            <h3 className="font-[700] text-[20px] leading-[21.6px] ">
              14 Days Return
            </h3>
            <p className="font-[500] font-playfair w-[301px] mt-2 text-[18px] leading-[24px] ">
              Lorem ipsum dolor sit amet, <br />
              consectetur
              <br /> adipiscing elit
            </p>
          </div>
        </div>
        <div className="text-center  border lg:border-none lg:shadow-none shadow-md lg:justify-start justify-center flex  gap-6 flex-col items-center py-10 lg:py-0">
          <Svg2 />
          <div>
            <h3 className="font-[700] text-[20px] leading-[21.6px] ">
              Security Payment
            </h3>
            <p className="font-[500] font-playfair w-[300px] mt-2 text-[18px] leading-[24px] ">
              Lorem ipsum dolor sit amet,
              <br /> consectetur <br />
              adipiscing elit
            </p>
          </div>
        </div>
      </div>
      <TrendyCollection />
      <div className="lg:h-[708px] 2xl:h-[970px] xl:h-[860px] max-w-[1915px] mx-auto mb-28 sm:grid-cols-2 grid lg:flex bg-[#a29875] relative mt-44 gap-2 sm:gap-1 px-1 lg:px-0 ">
        <div className="lg:max-w-[768px]">
          <Image
            src="/div.bwp-lookbook.png"
            width={560}
            height={560}
            alt="bwp-lookbook"
            className="2xl:min-w-[768px] xl:min-w-[680px] w-full lg:min-w-[560px]   "
          />
        </div>
        <div className="lg:hidden">
          <Image
            src="/SectionLink.png"
            width={560}
            height={560}
            alt="bwp-lookbook"
            className="w-full"
          />
        </div>
        <div className=" flex pt-28 pb-52  sm:relative left-44 lg:hidden flex-col  items-center gap-5">
          <p className=" text-[32px] text-white text-center">
            Jewelry for Every Occasion
          </p>
          <button className="text-[#A29875] text-[18px] w-[210.08px] h-[66px] rounded-[10px] bg-white">
            Shop Now
          </button>
        </div>
        <div className="absolute lg:hidden right-0 bottom-0">
          <Image
            src="/papper.png"
            width={200}
            height={200}
            alt="papper Image"
          />
        </div>
        <div className=" flex-grow hidden items-center gap-5 px-5 -mt-20  lg:flex xl:justify-center">
          <div className=" flex flex-col items-center gap-5">
            <p className="max-w-[340px] text-[32px] text-white text-center">
              Jewelry for Every Occasion
            </p>
            <button className="text-[#A29875] text-[18px] w-[210.08px] h-[66px] rounded-[10px] bg-white">
              Shop Now
            </button>
          </div>
          <div className="max-w-[360px]">
            <Image
              src="/SectionLink.png"
              width={260}
              height={260}
              alt="SectionLink"
            />
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src="/papper.png"
              width={200}
              height={200}
              alt="papper Image"
            />
          </div>
        </div>
      </div>
      <Spotted />
      <div className="bg-[#a29875] pb-10 sm:pb-0 sm:h-[500px] mx-3 items-center max-w-[1920px] xl:mx-auto gap-2 flex mb-28 sm:flex-row flex-col ">
        <div className="max-w-[843px] flex-grow  relative -ml-2 sm:-ml-3">
          <Image
            src="/image 1.png"
            width={770}
            height={700}
            alt="xyz.imge"
            className="sm:h-[400px]"
          />
        </div>
        <div className="text-white flex flex-col items-center px-5 gap-7">
          <h3 className="text-[50px] font-oswald text-center sm:mt-0 mt-5">
            ABOUT US
          </h3>
          <p className=" text-center font-oswald leading-[46.5px]  ">
            At Purity, we strive to deliver excellence, consistently. We've
            brought to the market a whole new standard of business ethics and
            product reliability.
          </p>
          <button className="w-[192px]  h-[39px] rounded-[10px] bg-white text-[16px] text-[#A29875]">
            View More
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
