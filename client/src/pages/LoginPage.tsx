import React from 'react'

const LoginPage = () => {
  return (
    <div className="container rounded-md p-4 mt-6 mb-6 h-[85vh] sm:h-min flex flex-col justify-between w-full bg-white bg-opacity-10 max-w-[450px] mx-auto ">
        <div className='px-2 grid grid-col md:w-96 md:mx-auto'>
            <div className='my-4 p-4'>
                <h3 className='text-lg font-semibold text-center text-white'>Login | Set an appointment</h3>  
            </div>
            <hr />
            <div className='flex flex-col justify-between pt-4 pb-6'>
                <div className='flex flex-col pb-4'>
                    <input 
                        className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                        type="text"
                        placeholder='Email'
                        />
                </div>
                <div className='flex flex-col pb-10'>
                    <input 
                        className='bg-gray-300 rounded-sm text-white px-2 py-3 text-sm' 
                        type="text"
                        placeholder='Password'
                    />
                </div>
                <div className='flex gap-3 pb-4 items-center'>
                    <label htmlFor="" className='text-gray-500 text-md'>Remember me</label>
                    <input 
                        className='h-4 w-4 rounded-sm text-white text-sm' 
                        type="checkbox"
                        placeholder='Password'
                    />
                </div>
            </div>
        </div>
        <div className='px-2 w-full md:w-96 mx-auto'>
            <p className='pb-8 text-center text-white'>Create new account? <span className='text-emerald-400'>Sign up</span></p>
            <button className='bg-green-400 font-semibold text-white py-1 rounded-sm w-full my-4'>Register</button>
        </div>
    </div>
  )
}

export default LoginPage