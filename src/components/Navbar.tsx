import {useState,useEffect} from 'react'
import {FaArrowUp} from 'react-icons/fa'
import { HiBars3,HiOutlineXMark } from "react-icons/hi2";


const Navbar = () => {

const [nav, setNav] = useState(false)

useEffect(() => {

},[nav])

  return (
    <nav className="z-10">
        <div className="w-full px-4 md:px-8 mx-auto py-4 flex justify-between max-w-[1280px]">
          <div className='flex items-center'>
        {nav?<HiOutlineXMark size={30} onClick={() => setNav((prev) => !prev)} />: <HiBars3 size={30} onClick={() =>setNav((prev) => !prev)} className='md:hidden'/>}
         <h1 className="text-2xl md:text-4xl font-semibold mb-5 mx-4 text-blue-700">consult Inc.</h1>
         </div>
         <div className='flex items-center'>
          <ul className='md:flex capitalize font-normal text-lg hidden  mr-6'>
            <li className='mx-2'>about</li>
            <li className='mx-2'>services</li>
            <li className='mx-2'>experience</li>
            <li className='mx-2'>contacts</li>
          </ul>
          <button className='border rounded-full p-2 text-sm md:text-lg flex items-center hover:text-white hover:bg-black duration-300 ease-linear border-black capitalize'>send request<FaArrowUp className='rotate-45 mx-1'/></button>
         </div>
        </div>
        <hr />
         {/* mobile navigation */}
 <div className={nav ? 'w-full text-white text-center z-20 px-4 bg-slate-400': 'absolute z-20 top-[-100%] duration-600 ease-in-out'}>
  <ul className='capitalize text-xl px-4 py-2'>
    <li className='py-2 cursor-pointer'>About</li>
    <li className='py-2 cursor-pointer'>service</li>
    <li className='py-2 cursor-pointer'>experience</li>
    <li className='py-2 cursor-pointer'>contact</li>
  
  </ul>
  </div>
    </nav>
  )
}

export default Navbar