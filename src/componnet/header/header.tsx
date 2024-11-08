import React from 'react'
import Image from 'next/image';
import Heart from '../heart';
import Account from '../account';
import Cart from '../cart';
import Search from '../search';

function Header() {
  return (
    <header className="bg-[#a09675]">
      <div className=" items-center h-[135.01px] max-w-[1486px] mx-auto px-10 gap-14  flex justify-between">
        <div className='lg:hidden'>
          <h1 className="sm:text-[75px] text-[50px] text-white font-rye  sm:block hidden ">
            MANZZARI
          </h1>
         <Image src="/MANZZARI (1).png" width={300} height={300} alt='Manzzari' className='sm:hidden'/>
        </div>
        <div className="w-[242px] lg:block hidden ">
          <Image src="/logo.png" width={200} height={200} alt="purity image" />
        </div>
        <div className=" lg:block hidden max-w-[769.89px] h-[56.24px] grow relative">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
            autoComplete="off"
            required
            className="w-full pr-16 h-full outline-none rounded-[13.83px] px-7"
          />
          <div className="absolute top-4 right-4">
            <Search />
          </div>
        </div>
        <div className="lg:block hidden">
          <nav className="list-none flex  gap-[38.7px]">
            <li>
              <Heart />
            </li>
            <li>
              <Account />
            </li>
            <li>
              <Cart />
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header