'use client'

import React, { FormEvent } from 'react'

export default function FormFooter() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const firstInput = formElement.elements[0];

    if (firstInput instanceof HTMLInputElement) {
      console.log(firstInput.value);
    }
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input className="w-[60%] p-2 text-black" />
      <button type="submit" className="w-[40%] bg-black">GỬI ĐI</button>
    </form>
  )
}
