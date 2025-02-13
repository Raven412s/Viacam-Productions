import Navbar from '@/components/Navbar'
import React, { PropsWithChildren } from 'react'

type Props = {}

const layout = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout
