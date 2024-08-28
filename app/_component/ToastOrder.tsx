'use client'

import React, { useCallback, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure you have the CSS imported
import { ListOrders } from '@/config/ListOrders';

function ToastOrder() {
  const onShowToast = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * ListOrders.length); 
    toast(ListOrders[randomNumber].content, {
      type: 'info',
      autoClose: 3000,
      position: 'bottom-left',
      icon: false
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(onShowToast, 10000);
    return () => {
      clearInterval(intervalId);
    };
  }, [onShowToast]);

  return (
    <div>
      <ToastContainer className="w-[400px]" toastClassName="bg-[url('/bg-toast.png')] bg-cover" />
    </div>
  );
}

export default ToastOrder;
