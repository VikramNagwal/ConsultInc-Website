import {FaArrowRight} from 'react-icons/fa'

const Newsletter = () => {
  return (
    <div className="bg-blue-700 text-white py-10 px-6">
      <div className="flex flex-col justify-between md:flex-row py-10 px-6">
        <div className="md:max-w-[40%]">
      <p className="font-semibold my-2 text-4xl">lets's work together to build something great</p>
      <p className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, impedit nostrum. Id, itaque accusantium!</p>
        </div>
        <form action="">
          <input type="text" placeholder="Name" maxLength={10} className=" placeholder-white mt-8 mb-4 bg-transparent outline-none border-b-2 mx-3 border-b-white"/>
          <input type="text" placeholder="Last Name" maxLength={10} className=" placeholder-white bg-transparent outline-none border-b-2 mx-3 border-b-white"/>
          <br />
          <input type="email" placeholder="Email" className="placeholder-white mx-3 mt-4 mb-4 bg-transparent border-b-2 border-white"/>
          <input type="number" placeholder="Phone" maxLength={10} className="placeholder-white bg-transparent border-b-2 mx-3" />
          <br />
          <input type="text" placeholder="Comment" maxLength={50} className="bg-transparent placeholder-white border-b-2 mx-3 w-full mt-6 "/>
          <button className="p-2 md:mx-auto mt-8 text-black hover:scale-95 duration-300 bg-white rounded-full flex items-center ">Send Request<FaArrowRight className='rotate-[-55deg] ml-2'/></button>
        </form>
        
        </div>
    </div>
  )
}

export default Newsletter