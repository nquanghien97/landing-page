"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppSidebar from './AppSidebar';
import MenuIcon from '@/assets/icons/MenuIcon';
import { listHeader } from '@/config/ListHeader';
import MenuDropdown from './common/MenuDropdown';
import BaseInput from './common/BaseInput';
import SearchIcon from '@/assets/icons/SearchIcon';
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon';

function AppHeader() {

  const [isSticky, setIsSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`h-[70px] fixed inset-x-0 top-0 flex items-center justify-center px-4 duration-300 z-50 bg-black text-white ${isSticky ? 'is-sticky' : ''}`}>
        <p className="max-md:w-full max-md:text-center">Logo</p>
        <div className='flex gap-2'>
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-6 max-md:flex-col max-md:hidden">
              {listHeader.map(item => (
                <li key={item.path} className="px-3 py-1">
                  {item.children ? (
                    <MenuDropdown
                      title={item.title}
                    >
                      <ul className="bg-[#0f0f10] flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-md md:py-2 text-white">
                        {item.children.map(childItem => (
                          <li key={childItem.path}>
                            <Link className={`cursor-pointer hover:text-[#ff9900] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                              {childItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </MenuDropdown>
                  ) : (
                    <Link href={item.path} className={`hover:text-[#ff9900] duration-300 ${pathname === item.path ? 'text-[#ff9900]' : ''}`}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <div className="max-md:hidden">
                <BaseInput placeholder='Tìm kiếm...' startIcon={<SearchIcon />} />
              </div>
              <div className='cursor-pointer'>
                <ShoppingCartIcon color='white' />
              </div>
            </div>
          </div>
          {!isOpenSidebar && (
            <div className="cursor-pointer md:hidden p-2 hover:bg-[#ccc] hover:opacity-60 rounded-full duration-300" onClick={() => setIsOpenSidebar(true)}>
              <MenuIcon fill="white" />
            </div>
          )}
          <AppSidebar
            open={isOpenSidebar}
            setOpen={setIsOpenSidebar}
            start="-24rem"
            end="0"
            exit="-24rem"
          >
            <div  className="py-7">
              <div>
                <BaseInput placeholder='Tìm kiếm...' endIcon={<SearchIcon />} />
              </div>
              <ul className="flex max-md:flex-col ">
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Trang chủ
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Giới thiệu
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Dịch vụ
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Kiến trúc
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Nội thất
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Tin tức
                  </Link>
                </li>
                <li className="flex px-3 py-1 hover:bg-[#0000000d] text-black">
                  <Link href="/" className="p-3 w-full h-full">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </AppSidebar>
        </div>
      </div>
      <div className="h-[70px]" />
    </>
  )
}

export default AppHeader