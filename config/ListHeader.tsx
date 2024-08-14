export type ListHeaderType = {
  title: string;
  path: string;
  key: string;
  children?: ListHeaderType[];
};


export const listHeader: ListHeaderType[] = [
  {
    title: 'Trang chủ',
    path: '/',
    key: '1'
  },
  {
    title: 'Sản phẩm',
    path: '/san-pham',
    key: '2',
    children: [
      {
        title: 'Tư vấn',
        path: '/dich-vu/tu-van',
        key: '2.1',
      },
      {
        title: 'Thiết kế',
        path: '/dich-vu/thiet-ke',
        key: '2.2',
      },
      {
        title: 'Thi công',
        path: '/dich-vu/thi-cong',
        key: '2.3',
      }
    ]
  },
  {
    title: 'Khách hàng',
    path: '/khach-hang',
    key: '3',
  },
  {
    title: 'Cẩm nang',
    path: '/cam-nang',
    key: '4',
  },
  {
    title: 'Liên hệ',
    path: '/lien-he',
    key: '5'
    // children: [
    //   {
    //     title: 'Chung cư',
    //     path: '/noi-that/chung-cu'
    //   },
    //   {
    //     title: 'Nhà Phố',
    //     path: '/noi-that/nha-pho'
    //   },
    //   {
    //     title: "Coffee - Nhà hàng - Showroom",
    //     path: "/noi-that/coffee-nha-hang-showroom"
    //   }
    // ]
  },
  {
    title: 'Chính sách',
    path: '/chinh-sach',
    key: '6'
  },
  // {
  //   title: 'Liên hệ',
  //   path: '/lien-he'
  // }
]