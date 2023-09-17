import {FaLinkedinIn} from 'react-icons/fa'

const Team = () => {
  return (
    <div className="bg-[#000200] text-white px-4 py-6">
      
        <p className="capitalize text-4xl py-8 mt-6 px-6 font-semibold">meet our team</p>
        <div className='py-8 px-4 max-w-[1280px] mx-auto relative capitalize flex flex-col  md:flex-row justify-between'>
          
           <figure className='relative cursor-pointer md:hover-scale-90 md:w-[25%] p-4 flex flex-col bg-white/20 rounded-lg'>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className='object-cover mb-2 md:mx-auto rounded-full w-24 h-24  md:w-48 md:h-48'/>
            <p className='font-semibold text-xl my-2  pl-4 capitalize '>john doe<br/><span className='font-normal text-sm'>founder & CEO</span></p>
            <FaLinkedinIn size={40} className='bg-blue-700 rounded-full p-1 absolute bottom-7 right-[40px]'/>
           </figure>
     
     <div className='flex flex-col md:flex-row items-center justify-between'>
           <figure className='p-6 cursor-pointer md:hover-scale-95 m-3 md:h-[80%] w-full flex md:flex-col bg-white/20 rounded-lg'>
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-24 h-24 md:w-38 md:h-38 rounded-full md:mx-auto'/>
            <p className='font-semibold text-xl my-2  pl-4 capitalize'>Jimmy fn<br/><span className='font-normal text-sm'>community manager</span></p>
           </figure>

           <figure className='p-6 cursor-pointer md:hover-scale-95 m-3 md:h-[80%] w-full flex md:flex-col bg-white/20 rounded-lg'>
    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-24 h-24 md:w-38 md:h-38 rounded-full md:mx-auto'/>
    <p className='font-semibold text-xl my-2  pl-4 capitalize'>mark din<br/><span className='font-normal text-sm'>consultant manager</span></p>
   </figure>

   <figure className='p-6 cursor-pointer md:hover-scale-90 duration-300 m-3 flex md:h-[80%] w-full md:flex-col bg-white/20 rounded-lg '>
    <img src="https://images.unsplash.com/photo-1602480370486-ddc38af362cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZSUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-24 h-24 md:w-38 md:h-38 rounded-full md:mx-auto'/>
    <p className='font-semibold text-xl my-2  pl-4 capitalize'>mary ford<br/><span className='font-normal text-sm'>community advisor</span></p>
   </figure>
     </div>
        </div>
    </div>
  )
}

export default Team