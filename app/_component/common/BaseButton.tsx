import React, { ReactNode } from 'react'

interface BaseButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function BaseButton(props: BaseButtonProps) {
  const { children, ...rest } = props
  return (
    <div {...rest}>
      <a href="#" className="bg-[#ff9900] hover:bg-[#df8805] duration-300 text-white px-4 py-2">
        {children}
      </a>
    </div>
  )
}

export default BaseButton