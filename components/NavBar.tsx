'use client'

import { useState } from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    
    const [open,setOpen]=useState(false)

    const handleOpen = () =>{
        setOpen(!open)
        console.log(open)
    }




  return (
    <div>


        <nav className='hidden lg:flex p-3 justify-around items-center w-4/5 mx-auto text-2xl'>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/consultations'}>Consultation</Link>
            <Link href={'/shop'}>Shop</Link>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/blog'}>Blog</Link>
        </nav>



        <div className="mobile flex lg:hidden justify-between 
                p-4 items-center ">
            
        <form action="" className=' md:ml-72 sm:ml-28 max-w-[500px] h-[40px] w-4/5 flex justify-between items-center border shadow-md px-4 rounded-md '>
            <input type="search" placeholder='Search MIP' className='w-4/5 h-full
                    
            ' />
            <button>
                <FontAwesomeIcon icon={faSearch} className='w-1/5' style={{width:'22px'}} />
            </button>
        </form>


            <div onClick={handleOpen} className="t relative z-40 w-1/5 cursor-pointer flex justify-end">
            <div className="toggle w-[32px]   h-[30px] rounded-md flex flex-col justify-center gap-3 ">
            <span className='bg-black dark:bg-white' style={{width:'100%', height:'3px'}}></span>
            <span className='bg-black dark:bg-white' style={{width:'100%', height:'3px'}}></span>
            <span className='bg-black dark:bg-white' style={{width:'100%', height:'3px'}}></span>
        </div>
            </div>
        </div>


        <div className="mobileMenu">
        <nav className={`${!open?'hidden':'flex'} 
            flex-col w-[100%] h-[100vw] bg-green-800
            fixed justify-start items-center py-5 text-4xl
            gap-3 text-slate-300 
        `}>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/services'}>Services</Link>
            <Link href={'/consultations'}>Consultation</Link>
            <Link href={'/shop'}>Shop</Link>
            <Link href={'/faq'}>FAQ</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/blog'}>Blog</Link>
        </nav>
        </div>

    </div>
  )
}

export default NavBar
