import Bounded from '@/components/global/HOC/Bounded'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Bounded>
        <div className="flex bg-purple-400 font-display text-8xl  items-center justify-center h-full w-full">VIACAM PRODUCTIONS</div>
    </Bounded>
    </>
  )
}

export default Home
