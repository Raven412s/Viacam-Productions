import React from 'react'
import { NavMenu } from './NavMenu'
import Logo from './Logo'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='sticky top-0 h-fit flex items-center  justify-between px-10  py-3 bg-background'>
        <div className='bg-background'><NavMenu /></div>
        <div className=" absolute top-3 md:top-0 left-1/2 -translate-x-1/2 flex gap-2 md:gap-5 items-end justify-center bg-background">
        <Logo width={40} height={40}/>
        <div className='flex w-fit items-center bg-background flex-col'>
            <h1 className="show min-w-max text-lg md:text-2xl">Viacam Productions</h1>
            <p className='text-[12px] text-muted-foreground'>Igniting Vision With Innovation</p>
        </div>
        </div>
        <div>contact </div>
    </nav>
  )
}

export default Navbar
