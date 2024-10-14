import React, { FC } from 'react'

const AuthLayout: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className='my-16 bg-[#FFB20E]'>
        {children}
    </div>
  )
}

export default AuthLayout;