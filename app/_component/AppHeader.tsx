"use client";

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppSidebar from './AppSidebar';
import MenuIcon from '@/assets/icons/MenuIcon';
import { listHeader } from '@/config/ListHeader';
import MenuDropdown from './common/MenuDropdown';
import BaseInput from './common/BaseInput';
import SearchIcon from '@/assets/icons/SearchIcon';
import ShoppingCartIcon from '@/assets/icons/ShoppingCartIcon';
import { useProductsStore } from '@/zustand/products';
import DataCart from './DataCart';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import useDebounce from '@/hooks/useDebounce';
import { DataProducts, ProductEntity } from '@/entities/Products';
import { getProducts } from '@/services/products';
import SearchResult from './SearchResult';
import LoadingIcon from '@/assets/icons/LoadingIcon';
// import NavLink from './NavLink';

function AppHeader() {

  const [isSticky, setIsSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const pathname = usePathname();
  const [openDataCart, setOpenDataCart] = useState(false);
  const [openDataSearch, setOpenDataSearch] = useState(false);
  const [productName, setProductName] = useState('');
  const [productsResult, setProductsResult] = useState<DataProducts[]>([])
  const [loading, setLoading] = useState(false);
  const debounceName = useDebounce(productName, 500)

  const { products } = useProductsStore();
  const quantity = products.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0);

  const dataCartRef = useOutsideClick(() => {
    setOpenDataCart(false);
  })

  const dataProductsRef = useOutsideClick(() => {
    setOpenDataSearch(false);
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setOpenDataSearch(false);
    } else {
      setOpenDataSearch(true);
    }
    setProductName(e.target.value)
  }

  const fetchDataSearch = useCallback(async () => {
    setLoading(true);
    try {
      if (productName) {
        const res = await getProducts({ name: debounceName })
        setProductsResult(res.data)
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
    , [debounceName, productName])
  useEffect(() => {
    (async () => {
      await fetchDataSearch()
    })()
  }, [debounceName, fetchDataSearch])

  return (
    <>
      <div className={`h-[70px] fixed inset-x-0 top-0 px-4 duration-300 z-50 bg-[#3e7c30] text-white`}>
        <div className="max-w-6xl m-auto flex items-center justify-between h-full">
          <div className="px-2 max-lg:flex-1">
            <Link href="/" className="max-lg:w-full max-lg:text-center flex justify-center">
              <Image src="/logo.png" alt="logo" width={100} height={100} className="cursor-pointer" />
            </Link>
          </div>
          <div className='flex gap-2'>
            <div className="flex items-center">
              <ul className="flex items-center gap-2 max-lg:flex-col max-lg:hidden uppercase">
                {listHeader.map(item => (
                  <li key={item.path} className="px-3 py-1 font-bold">
                    {item.children ? (
                      <MenuDropdown
                        title={item.title}
                        path={item.path}
                        key={item.key}
                      >
                        <ul className="bg-[#3e7c30] flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-lg lg:py-2 text-white">
                          {item.children.map(childItem => (
                            <li key={childItem.path}>
                              <Link className={`cursor-pointer hover:text-[#f18017] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                                {childItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </MenuDropdown>
                    ) : (
                      <Link key={item.key} href={item.path} className={`hover:text-[#f18017] duration-300 ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <div className="max-lg:hidden lg:max-w-[120px] xl:max-w-[200px] relative">
                  <BaseInput placeholder='Tìm kiếm...' startIcon={<SearchIcon />} endIcon={loading && <LoadingIcon size='small' />} onChange={handleChangeInput} value={productName || ''} />
                  {(openDataSearch && productsResult.length !== 0) && <SearchResult data={productsResult} dataProductsRef={dataProductsRef} setOpenDataSearch={setOpenDataSearch} />}
                </div>
                <div className='relative'>
                  <div className="cursor-pointer" onClick={() => setOpenDataCart(pre => !pre)}>
                    <ShoppingCartIcon color='white' numberCart={quantity} />
                  </div>
                  {openDataCart && <DataCart products={products} dataCartRef={dataCartRef} />}
                </div>
              </div>
            </div>
            {!isOpenSidebar && (
              <div className="cursor-pointer lg:hidden p-2 hover:bg-[#ccc] hover:opacity-60 rounded-full duration-300" onClick={() => setIsOpenSidebar(true)}>
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
              <div className="py-7">
                <div className="max-md:p-2 max-md:border-b-2">
                  <BaseInput placeholder='Tìm kiếm...' endIcon={<SearchIcon />} />
                </div>
                <ul className="flex max-lg:flex-col text-black">
                  {listHeader.map(item => (
                    <li key={item.path} className="px-3 md:py-1 py-4 max-md:border-b-2" onClick={() => setIsOpenSidebar(false)}>
                      {item.children ? (
                        <MenuDropdown
                          title={item.title}
                          path={item.path}
                        >
                          <ul className="bg-[#0f0f10] flex flex-col min-w-[15rem] border border-[#ffffff12] rounded-lg lg:py-2">
                            {item.children.map(childItem => (
                              <li key={childItem.path}>
                                <Link className={`cursor-pointer hover:text-[#f18017] px-4 py-2 w-full flex items-center`} href={childItem.path}>
                                  {childItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </MenuDropdown>
                      ) : (
                        <Link href={item.path} className={`hover:text-[#f18017] duration-300 ${pathname === item.path ? 'text-[#f18017]' : ''}`}>
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AppSidebar>
          </div>
        </div>
      </div>
      <div className="h-[70px]" />
    </>
  )
}

export default AppHeader