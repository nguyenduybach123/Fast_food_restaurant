import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

export const MenuNavigate = () => {
  return (
    <div className='hidden md:block ml-4 md:ml-8 lg:ml-16 font-semibold text-md'>
        <ul className='flex'>
            <li className={cn('px-2 py-1', 'relative after:content-[""] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-2 after:bg-[#fb6262]')}>
                <Link href={''}>
                    Find Food
                </Link>
            </li>
            <li className='px-2 py-1'>
                <Link href={''}>
                    Catagories
                </Link>
            </li>
            <li className='px-2 py-1'>
                <Link href={''}>
                    Restuarent
                </Link>
            </li>
            <li className='px-2 py-1'>
                <Link href={''}>
                    About Us
                </Link>
            </li>
            <li className='px-2 py-1 text-[#f42020]'>
                88012345678
            </li>
        </ul>
    </div>
  )
}
