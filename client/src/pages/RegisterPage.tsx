import React from 'react'
import avatar from '../assets/default-avatar.webp'
const RegisterPage = () => {
  return (
    <div className="container rounded-md p-4 mt-6 mb-6 h-[85vh] sm:h-min lg:h-[85vh] flex flex-col justify-between sm:justify-center w-full bg-white bg-opacity-10 lg:bg-transparent  max-w-[450px] mx-auto">
        <div className='px-2 grid grid-col md:w-96 md:mx-auto'>
            <div className='my-4 flex items-center gap-3'>
                <h3 className='text-lg font-semibold text-white px-4'>Sign up | Set an appointment</h3>  
                <img className='w-24 h-24 bg-white rounded-full mx-4' src={avatar} alt="" />
            </div>
            <hr />
            <div className='flex flex-col pt-6 pb-6'>
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
                            onblur="(this.type='text')" 
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
            </div>
        </div>
        <div className='px-2 w-full md:w-96 mx-auto'>
            <p className='pb-8 text-center text-white'>Have an account? <span className='text-emerald-400'>Login</span></p>
            <button className='bg-green-400 font-semibold text-white py-2 rounded-sm w-full my-4'>Register</button>
        </div>
    </div>
  )
}

export default RegisterPage