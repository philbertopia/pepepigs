"use client"

import Image from 'next/image'
import React from 'react'


const Navbar = () => {
  return (
    <div className='flex items-center p-2 md:p-24 justify-between'>
        <div className='flex items-center'>
            <Image src="/scam-club-nft-logo-green-round.png" alt='Pepe Frog Logo' width={60} height={60}/>
            <h1 className="p-2 text-2xl">PEPE PIGS</h1>
        </div>
        <button>Connect</button>
    </div>
  )
}

export default Navbar