import React, { useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { RiStarSmileLine } from 'react-icons/ri'
import avatar from '../assets/default-avatar.webp'
import { FaMapMarker, FaRegHeart } from 'react-icons/fa'
import { MdOutlinePhoneEnabled } from 'react-icons/md'

const HomePage = () => {
    const [clinics, setClinics ] = useState(false);
  return (
    <>
        <div className="container my-6 px-4">
            <div>
                <div className='flex flex-row gap-4 text-white'>
                    <div onClick={() => setClinics(true)} className={clinics ? 'border-b-2' : ''}>
                        Clinics
                    </div>
                    <div onClick={() => setClinics(false)} className={!clinics ? 'border-b-2' : ''}>
                        Dentists
                    </div>
                </div>
                { clinics ? (
                <div className='grid grid-col gap-5 w-full my-4'>
                    <div className="bg-white bg-opacity-10 p-4 rounded h-36 items-start relative">
                        <div className='absolute bottom-4 right-0 font-semibold flex justify-between gap-2 items-center w-full px-4'>
                            <div className='flex gap-2 items-center'>
                                <h4 className='text-white'>Sometings </h4>
                                <BsExclamationCircle className='text-white' />
                            </div>
                            <div className='flex gap-2 items-center text-white'>
                                <p className='text-sm'>(247)</p>
                                <RiStarSmileLine className='text-white'/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white bg-opacity-10 p-4 rounded h-36 items-start relative">
                        <div className='absolute bottom-4 right-0 font-semibold flex justify-between gap-2 items-center w-full px-4'>
                            <div className='flex gap-2 items-center'>
                                <h4 className='text-white'>Sometings </h4>
                                <BsExclamationCircle className='text-white' />
                            </div>
                            <div className='flex gap-2 items-center text-white'>
                                <p className='text-sm'>(247)</p>
                                <RiStarSmileLine className='text-white'/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-10 p-4 rounded h-36 items-start relative">
                        <div className='absolute bottom-4 right-0 font-semibold flex justify-between gap-2 items-center w-full px-4'>
                            <div className='flex gap-2 items-center'>
                                <h4 className='text-white'>Sometings </h4>
                                <BsExclamationCircle className='text-white' />
                            </div>
                            <div className='flex gap-2 items-center text-white'>
                                <p className='text-sm'>(247)</p>
                                <RiStarSmileLine className='text-white'/>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className='grid grid-col gap-5 w-full my-4'>
                        <div className="bg-white bg-opacity-10 p-2 rounded h-32 items-start ">
                            <div className='font-semibold flex gap-2 items-start w-full px-2 relative'>
                                <div className='flex flex-col items-center pt-2'>
                                    <img className='w-28 h-20 bg-white rounded-2xl' src={avatar} alt="" />
                                    <button className='bg-red-300 py-1 px-4 border border-red-300 rounded-full text-white text-sm -translate-y-2'>Book</button>
                                </div>
                                <div className=' text-white w-full'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='font-semibold text-lg'>Dr. Garry</h3> 
                                        <FaRegHeart className='text-white h-4 w-auto'/>
                                    </div>
                                    <div className='flex items-start pb-3'>
                                        <FaMapMarker className="text-orange-700 inline text-md mb-1 mr-1 mt-1"/>
                                        <p className='text-wrap'>123 Street Melboune • Austrailia</p>
                                    </div>
                                    <div className='flex justify-between gap-2 items-center text-white pl-4'>
                                            <MdOutlinePhoneEnabled  className='text-white h-5 w-auto'/>
                                        <div className='flex gap-2 items-center text-white'>
                                            <p className='text-sm'>(247)</p>
                                            <RiStarSmileLine className='text-white h-5 w-full'/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 p-2 rounded h-32 items-start ">
                            <div className='font-semibold flex gap-2 items-start w-full px-2 relative'>
                                <div className='flex flex-col items-center pt-2'>
                                    <img className='w-28 h-20 bg-white rounded-2xl' src={avatar} alt="" />
                                    <button className='bg-red-300 py-1 px-4 border border-red-300 rounded-full text-white text-sm -translate-y-2'>Book</button>
                                </div>
                                <div className=' text-white w-full'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='font-semibold text-lg'>Dr. Garry</h3> 
                                        <FaRegHeart className='text-white h-4 w-auto'/>
                                    </div>
                                    <div className='flex items-start pb-3'>
                                        <FaMapMarker className="text-orange-700 inline text-md mb-1 mr-1 mt-1"/>
                                        <p className='text-wrap'>123 Street Melboune • Austrailia</p>
                                    </div>
                                    <div className='flex justify-between gap-2 items-center text-white pl-4'>
                                            <MdOutlinePhoneEnabled  className='text-white h-5 w-auto'/>
                                        <div className='flex gap-2 items-center text-white'>
                                            <p className='text-sm'>(247)</p>
                                            <RiStarSmileLine className='text-white h-5 w-full'/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-10 p-2 rounded h-32 items-start ">
                            <div className='font-semibold flex gap-2 items-start w-full px-2 relative'>
                                <div className='flex flex-col items-center pt-2'>
                                    <img className='w-28 h-20 bg-white rounded-2xl' src={avatar} alt="" />
                                    <button className='bg-red-300 py-1 px-4 border border-red-300 rounded-full text-white text-sm -translate-y-2'>Book</button>
                                </div>
                                <div className=' text-white w-full'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='font-semibold text-lg'>Dr. Garry</h3> 
                                        <FaRegHeart className='text-white h-4 w-auto'/>
                                    </div>
                                    <div className='flex items-start pb-3'>
                                        <FaMapMarker className="text-orange-700 inline text-md mb-1 mr-1 mt-1"/>
                                        <p className='text-wrap'>123 Street Melboune • Austrailia</p>
                                    </div>
                                    <div className='flex justify-between gap-2 items-center text-white pl-4'>
                                            <MdOutlinePhoneEnabled  className='text-white h-5 w-auto'/>
                                        <div className='flex gap-2 items-center text-white'>
                                            <p className='text-sm'>(247)</p>
                                            <RiStarSmileLine className='text-white h-5 w-full'/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                
                <div className='mx-auto'>
                    <ul className='flex gap-2 text-white'>
                        <li>Prev</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>Next</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage