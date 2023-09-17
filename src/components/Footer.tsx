import {BiLogoFacebook,BiLogoTwitter,BiLogoStackOverflow,BiLogoLinkedin} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='p-4 max-w-[1280px] mx-auto flex flex-col-reverse justify-between md:flex-row items-center'>
        <div className=''>
        <div className='flex items-center md:mx-auto duration-300 py-4'>
         <p className='p-2 border-black mx-3 hover:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-white hover:border-white duration-300 cursor-pointer border rounded-full font-semibold'>Instagram</p>
        <BiLogoFacebook className='m-1 border rounded-full hover:bg-blue-700 hover:text-white w-10 h-10 border-black hover:border-white p-1 cursor-pointer'/>
        <BiLogoTwitter className='m-1 border rounded-full w-10 h-10 border-black  hover:bg-blue-700 hover:text-white hover:border-white cursor-pointer p-1'/>
        <BiLogoStackOverflow className='m-1 border rounded-full w-10 h-10 p-1 border-black cursor-pointer hover:bg-orange-400 hover:text-white hover:border-white'/>
        <BiLogoLinkedin className='m-1 border rounded-full w-10 h-10 border-black p-1 cursor-pointer hover:bg-blue-700 hover:text-white hover:border-white'/>
        </div>
        <div className='flex items-center py-6'>
            <p className='opacity-80 py-2 mr-2'>for general enquiries<br/><span className='opacity-100 font-semibold text-lg'>xyz@consulting.org</span></p>
            <p className='opacity-80 py-2 ml-2'>for press or media requests<br/><span className='opacity-100 font-semibold text-lg'>pressxyz@consulting.org</span></p>
        </div>
        <p className='capitalize text-center opacity-80 text-lg border-t-2'>registered charity in mumbai, india</p>
        </div>
        <div className='flex capitalize text-lg mt-8 py-4'>
            <ul className='md:mx-8 '>
                <li className='cursor-pointer'>about us</li>
                <li className='cursor-pointer'>our services</li>
                <li className='cursor-pointer'>contact us</li>
                <li className='cursor-pointer'>blog</li>
                <li className='cursor-pointer'>careers</li>
                <li className='cursor-pointer'>global movements</li>
            </ul>
            <ul className='mx-6'>
                <li className='cursor-pointer'>affiliates</li>
                <li className='cursor-pointer'>become a partner</li>
                <li className='cursor-pointer'>appeals</li>
                <li className='cursor-pointer flex items-center'>donate</li>
            </ul>
        </div>      
    </div>
  )
}

export default Footer