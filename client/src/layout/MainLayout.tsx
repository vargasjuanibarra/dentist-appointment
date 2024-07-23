import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <div className='bg-white bg-opacity-20'>
            <div className="container mx-auto">
                <Navbar />
            </div>
        </div>
        <div className="container mx-auto">
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout