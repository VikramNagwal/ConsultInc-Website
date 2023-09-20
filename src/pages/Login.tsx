

const Login = () => {
  return (
    <div>
      <div className=" py-4 mt-10 px-2">
      <form action="" className="flex flex-col items-center py-3 rounded-md w-full px-4 text-white bg-blue-700 md:max-w-[50%] mx-auto">
  <input type="text" placeholder="Name" maxLength={10} className=" placeholder-white w-full mt-8 mb-4 bg-transparent outline-none 
border-b-2 mx-3 border-b-white"/>
  <input type="text" placeholder="Last Name" maxLength={10} className=" placeholder-white bg-transparent outline-none border-b-2 
mx-3 border-b-white w-full "/>
  <br />
  <input type="email" placeholder="Email" className="placeholder-white mx-3 w-full mt-4 mb-4 bg-transparent border-b-2 border-white"/>
  <input type="number" placeholder="Phone" maxLength={10} className="placeholder-white w-full bg-transparent border-b-2 border-white mx-3" />
  <br />
  <input type="text" placeholder="Request" maxLength={50} className="bg-transparent placeholder-white w-full border-b-2 border-white mx-3 mt-6 "/>
  <button className="text-center p-2 md:mx-auto mt-8 text-blue-700 hover:scale-95 duration-300 bg-white  w-[40%] mx-6 rounded-full ">Submit</button>
</form>
      </div>
    </div>
  )
}

export default Login