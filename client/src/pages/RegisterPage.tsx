import React from 'react'
import avatar from '../assets/default-avatar.webp'
const RegisterPage = () => {
  return (
    <div className="container h-[85vh] sm:h-min flex flex-col justify-between w-full mx-auto">
        <div className='rounded-md p-4 mt-6 mb-6 grid grid-col bg-white bg-opacity-10 max-w-[450px] md:w-96 md:mx-auto'>
            <div>
                    <div className='my-4 flex items-center gap-3'>
                        <h3 className='text-lg font-semibold text-white px-4'>Sign up | Set an appointment</h3>  
                        <img className='w-24 h-24 bg-white rounded-full mx-4' src={avatar} alt="" />
                    </div>
                    <div className='flex flex-col pt-4 pb-4'>
                            <div className='flex flex-col pb-4'>
                                <input 
                                    className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                                    type="text"
                                    placeholder='Email'
                                    />
                            </div>
                            <div className='flex flex-col pb-4'>
                                <input 
                                    className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                                    type="text" 
                                    placeholder="Birth Date" 
                                    onfocus="(this.type='date')" 
                                    id="date"
                                />
                            </div>
                            <div className='flex flex-col pb-4'>
                                <input 
                                    className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                                    type="text"
                                    placeholder='Password'
                                />
                            </div>
                            <div className='flex flex-col pb-4'>
                                <input 
                                    className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                                    type="text"
                                    placeholder='Confirm Password'
                                />
                            </div>
                            <div className='flex gap-3 pb-4 items-center'>
                            <input 
                                className='h-4 w-4 rounded-sm text-white text-sm' 
                                type="checkbox"
                                placeholder='Password'
                            />
                            <label htmlFor="" className='text-gray-400 text-md'>Agree to the terms and conditions</label>
                        </div>
                    </div>
                </div>
                <div className='px-2 w-full md:w-96 mx-auto'>
                    <button className='bg-green-400 font-semibold text-white py-2 rounded-sm w-full my-2'>Register</button>
                    <p className='pb-4 pt-2 text-center text-white'>Have an account? <span className='text-emerald-400'>Login</span></p>
                </div>
            </div>
    </div>
  )
}

export default RegisterPage