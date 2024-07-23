import { FaBars } from 'react-icons/fa'
import { IoIosLogIn } from 'react-icons/io'
import { IoLogOutOutline } from 'react-icons/io5'
import { PiToothDuotone, PiUserList } from 'react-icons/pi'

const Navbar = () => {
  return (
    <>
        <div className="relative">
            <div className="flex justify-between">
                <div className="logo font-semibold p-3 flex items-center">
                <PiToothDuotone />
                <span className='italic '>Dentis</span>
                </div>
                <div className='p-4 md:p-0'>
                    <div className='md:hidden'>
                        <FaBars />
                    </div>
                    <div className="absolute top-12 right-0 bg-white md:static md:top-0 md:bg-transparent">
                        <ul className='flex flex-col gap-2 w-48 border md:flex-row md:w-auto md:border-none'>
                            <li className='hover:bg-gray-200 r p-3 flex items-center gap-2'>
                                <IoIosLogIn /><p className='text-sm'>Login</p>
                            </li>
                            <hr />
                                <li className='hover:bg-gray-200 r p-3 flex items-center gap-2'>
                                    <PiUserList /><p className='text-sm'>Signup</p>
                                </li>
                            <hr />
                                <li className='hover:bg-gray-200 r p-3 flex items-center gap-2'>
                                    <IoLogOutOutline /><p className='text-sm'>Logout</p>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar