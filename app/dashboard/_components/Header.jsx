"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../../../public/logo.svg'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

function Header() {
    const path = usePathname();
    useEffect(()=>{
       
    },[]);
  return (
    <div className='flex p-6 items-center justify-between bg-secondary shadow-md'>
        <Image src={logo} width={160} height={100} alt='Logo'/>
        <ul className='hidden md:flex gap-8'>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-primary font-bold'}`}>Dashboard</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/faqs' && 'text-primary font-bold'}`}>FAQs</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-primary font-bold'}`}>Upgrade</li>
            <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path=='/dashboard/howitworks' && 'text-primary font-bold'}`}>How It Works?</li>
        </ul>
        <UserButton/>
    </div>
  )
}

export default Header