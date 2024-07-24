import React, { useState } from 'react'
import { BsExclamationCircle } from 'react-icons/bs'
import { RiStarSmileLine } from 'react-icons/ri'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const ClinicPage = () => {
    type ValuePiece = Date | null;
    type Value = ValuePiece | [ValuePiece, ValuePiece];

    const [value, onChange] = useState<Value>(new Date());
  return (
    <>
    <div className=' flex flex-col gap-4 md:container md:mx-auto'>
        <div className="bg-white bg-opacity-10 p-4 rounded h-36 items-start relative gap-4">
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
        <div>
            <Calendar onChange={onChange} value={value} className="bg-white bg-opacity-20 text-white border-none w-full p-2"/>
        </div>
        <div className='bg-white bg-opacity-20 py-4'>
            <div className='flex flex-row gap-4 text-white mt-3 px-4 mb-8'>
                <div className='border-b-2'>
                    Morning
                </div>
                <div className='border-b-2'>
                    Afternoon
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 px-4 text-white text-sm text-center my-4'>
                <div className='border rounded-full py-1'>
                    <p>8:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>9:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>10:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>11:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>1:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>2:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>3:00 am</p>
                </div>
                <div className='border rounded-full py-1'>
                    <p>4:00 am</p>
                </div>
            </div>
        </div>
        <div className='bg-white bg-opacity-20 flex justify-normal items-center mt-2 mb-8'>
            <div className='w-14 h-14 rounded-full bg-white mx-4'>
                <IoMdCheckmarkCircleOutline className='w-14 h-14 text-emerald-500' />
            </div>
            <div className=''>
                <p className='text-white font-semibold text-lg px-4'>Confirm booking date?</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ClinicPage