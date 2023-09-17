import {FaStar} from 'react-icons/fa'

const Section2 = () => {
 
  return (
      <div className='bg-gradient-to-r from-violet-300 to-violet-400'>
        <div className='flex flex-col md:flex-row justify-between relative'>
        <div className='text-white py-6 my-6 capitalize flex md:absolute top-[50%] md:top-[20%] right-[20%] md:right-[27%] flex-col items-center text-center font-bold text-4xl'>
          <FaStar size={80} color='blue' />
        <p>new way <br/> management <br/> system</p>
        </div>
           <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="professional image"/>     
        </div>
      </div>   
  )
}

export default Section2