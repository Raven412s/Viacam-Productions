import React from 'react'
import ScreenDisectReveal from '@/components/global/ScreenDisectReveal/index'
import HorizontalScrolling from '@/components/global/HorizontalScrolling'
const Teams = () => {
  return (
    <section className='min-h-screen w-full absolute mt-[100vh]'>
        <ScreenDisectReveal centerPage={<HorizontalScrolling/>}
        />
    </section>
  )
}

export default Teams
