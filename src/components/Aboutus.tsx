
const Aboutus = () => {

  return (
    <div className="py-8 my-6 px-4">
        <div className="py-8 md:pl-10">
            <a href="/" className="px-4 font-bold text-xl py-4 text-blue-700 my-8">About us</a>
            <p className="font-semibold  md:pr-[20%] text-xl px-4 py-4 capitalize">management consulting firm based in europe must rely on their knowledge and experience in providing services to a wide <span className="opacity-60">range of business concerns in the regions</span></p>
        <div className="flex justify-between  flex-col py-4 md:flex-row px-4">

            <h1 className="text-xl font-bold capitalize px-4 py-6">fully<br/>connected</h1>
  
{/* main div */}
        <div className=" flex flex-col justify-between leading-6 w-full items-center md:w-[80%] font-normal">
          {/* first part */}
          <div className="flex flex-col items-center md:flex-row py-4 px-2">
            
            <p className="md:w-[50%] border rounded-xl p-2 md:hover:bg-blue-700 md:hover:text-white duration-300 mx-2 cursor-pointer my-2"><span className="font-semibold text-lg capitalize">strategy</span><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et maxime voluptate corporis quia officiis ipsa dolorem, veritatis voluptatem distinctio.</p>
          
             <p className="md:w-[50%] md:hover:bg-blue-700 md:hover:text-white duration-300 cursor-pointer border rounded-xl p-2 mx-2 "><span className="font-semibold text-lg capitalize">management</span> <br/>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Placeat et maxime voluptate corporis quia officiis ipsa dolorem, 
            veritatis voluptatem distinctio.</p>
            </div>
             {/*second part */}
            <div className="flex flex-col items-center md:flex-row px-2 py-4">

             <p className="md:w-[50%] border rounded-xl md:hover:bg-blue-700 md:hover:text-white duration-300 cursor-pointer p-2 mx-2 my-2"><span className="font-semibold text-lg capitalize">financial</span> <br/>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Placeat et maxime voluptate corporis quia officiis ipsa dolorem, 
            veritatis voluptatem distinctio.</p>
            
            
             <p className="md:w-[50%] border rounded-xl md:hover:bg-blue-700 md:hover:text-white duration-300 cursor-pointer p-2 mx-2 my-2"><span className="font-semibold text-lg capitalize">secure</span> <br/>Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Placeat et maxime voluptate corporis quia officiis ipsa dolorem, 
            veritatis voluptatem distinctio.</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Aboutus