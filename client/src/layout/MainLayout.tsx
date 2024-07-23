import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <div className='bg-white bg-opacity-80 h-12'>
            <div className="container mx-auto">
                <Navbar />
            </div>
        </div>
    </>
  )
}

export default MainLayout