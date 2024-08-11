'use client'

import { useRouter } from 'next/navigation';
import { useId } from 'react';
import Select, { SingleValue } from 'react-select';

const options = [
  {
    label: "Giá từ thấp đến cao",
    value: "price"
  },
  {
    label: "Giá từ cao đến thấp",
    value: "price-desc"
  },
  {
    label: "Sản phẩm mới nhất",
    value: "createdAt"
  }
]
function Filter() {

  const router = useRouter();

  const onChange = (e: SingleValue<{
    label: string;
    value: string;
  }>) => {
    router.push(`?orderby=${e?.value}`)
  }
  return (
    <Select
      options={options}
      defaultValue={options[2]}
      onChange={onChange}
      instanceId={(useId())}
    />
  )
}

export default Filter