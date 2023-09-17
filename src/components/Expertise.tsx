import { FaArrowRight, FaKickstarter, FaCopy } from "react-icons/fa"

const Expertise = () => {

  return (
    <div className="bg-[#020000] text-white w-full py-6">
        <div className="max-w-[1280px] capitalize py-4 px-4">
          <div className="py-4">
        <a href="/" className="text-blue-600 font-semibold">Enterprise</a>
        <p className="text-lg font-semibold pt-4 pb-2">highly specialized advisors</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores placeat ex reprehenderit vitae similique excepturi vel sit corrupti eum!</p>
        <button className="flex items-center hover:rotate-0 px-4 py-2 bg-slate-100 rounded-full capitalize text-black my-6">all services<FaArrowRight className="rotate-[-60deg] duration-300 ml-2"/></button>
        </div>

        <div className="md:max-w-[50%]">
            <figure className="p-4 border-slate-200 border rounded-md my-4">
                <FaKickstarter />
                <h1>strategy consulting</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugit.</p>
            </figure>

          <figure className="bg-blue-700 rounded-md p-4 my-4 relative">
          <FaCopy />
        <h1>public sector</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, fugit.
        </p>
        <FaArrowRight size={40} className="rotate-[-45deg] p-2 cursor-pointer absolute top-4 right-8 text-center text-blue-700 bg-white  border rounded-full"/>
           </figure>
        </div>
        </div>
    </div>
  )
}

export default Expertise