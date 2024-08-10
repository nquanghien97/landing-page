'use client'

import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import ImageDetailsProduct from "../_component/ImageDetailsProduct";

const listImage = [
  {
    id: 1,
    imageUrl: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289967096_179026527900462_8941165103126664339_n.jpg',
    title: 'THIẾT KẾ KIẾN TRÚC - NHÀ MÁY SẢN XUẤT'
  },
  {
    id: 2,
    imageUrl: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289970998_179025507900564_6123763105644138584_n.jpg',
    title: 'THIẾT KẾ NỘI THẤT - THI CÔNG NỘI THẤT'
  },
  {
    id: 3,
    imageUrl: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289967096_179026527900462_8941165103126664339_n.jpg',
    title: 'THIẾT KẾ KIẾN TRÚC - NHÀ MÁY SẢN XUẤT'
  },
  {
    id: 4,
    imageUrl: 'https://mamvietnam.vn/wp-content/uploads/2022/07/289970998_179025507900564_6123763105644138584_n.jpg',
    title: 'THIẾT KẾ NỘI THẤT - THI CÔNG NỘI THẤT'
  },
]

interface TinTucProps {
  data: {
    id: number;
    imageUrl: string;
    title: string;
  }[]
}

function TinTuc() {
  
  return (
    <div className="max-w-screen-xl m-auto p-4 flex gap-4">
      <div className="w-[40%] overflow-hidden">
        <ImageDetailsProduct data={listImage} />
      </div>
      <div>
        <div className="mb-2">
          <span>Bộ Sofa chất liệu da bò Italia</span>
        </div>
        <div>
          <span>42.000.000đ</span>
        </div>
      </div>
    </div>
  );
}

export default TinTuc;
