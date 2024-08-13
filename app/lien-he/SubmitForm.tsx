'use client'

import React, { FormEvent } from 'react'
import BaseInput from '../_component/common/BaseInput'
import SearchIcon from '@/assets/icons/SearchIcon'
import { useRouter, useSearchParams } from 'next/navigation'

function SubmitForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/lien-he?search=${e.currentTarget.search.value}`)
  }
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full max-w-[80%] md:max-w-[30%] basis-[30%]">
        <form className="w-full" onSubmit={onSubmit}>
          <BaseInput defaultValue={searchParams.get('search') || ''} name="search" fullWidth endIcon={<button type='submit'><SearchIcon /></button>} />
        </form>
      </div>
    </div>
  )
}

export default SubmitForm