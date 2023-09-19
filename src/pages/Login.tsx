

const Login = () => {
  return (
    <div>
      <div className=" py-4 mt-10 px-2">
      <form action="" className="flex flex-col items-center  w-full">
  <input type="text" placeholder="Name" maxLength={10} className=" placeholder-black w-full mt-8 mb-4 bg-transparent outline-none 
border-b-2 mx-3 border-b-black"/>
  <input type="text" placeholder="Last Name" maxLength={10} className=" placeholder-black bg-transparent outline-none border-b-2 
mx-3 border-b-black w-full "/>
  <br />
  <input type="email" placeholder="Email" className="placeholder-black mx-3 w-full mt-4 mb-4 bg-transparent border-b-2 border-black"/>
  <input type="number" placeholder="Phone" maxLength={10} className="placeholder-black w-full bg-transparent border-b-2 border-black mx-3" />
  <br />
  <input type="text" placeholder="Request" maxLength={50} className="bg-transparent placeholder-black w-full border-b-2 border-black mx-3 mt-6 "/>
  <button className="px-2 py-1 md:mx-auto mt-8 text-white hover:scale-95 duration-300 bg-blue-700 w-full mx-6 rounded-full flex items-center ">Submit</button>
</form>
      </div>
    </div>
  )
}

export default Login