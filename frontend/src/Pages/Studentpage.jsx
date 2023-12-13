import {react} from "react"
const Studentpage=()=>{
    return( 
        <div>


    <div className='pt-70 '>
      <h1 className=' text-9xl text-center font-serif max-sm:text-6xl'>AUCAS</h1>
      <div className=" flex justify-center">
        <form action="" method="get">
            <h2 className=" text-2xl text-blue-600">Login as a Student</h2>
            <label htmlFor="Email">Email</label> <br />
            <input type="email" placeholder="Enter your email" className=" border-4 w-80"  /> <br />

            <label htmlFor="Password" className="">Password</label> <br />
            <input type="password" placeholder="Enter your password" className=" border-4 w-80"   /> <br />
            <button className=" bg-teal-400 w-36 m-4 hover:bg-black hover:text-white h-10"> <a href="/StudentDashboard">Login</a></button>
            <p>New Here? <a href="/Studentform" className=" text-blue-600 italic">Signup</a></p>
        </form>
       

      </div>
    
       <div> 

       </div>

     </div>

 </div>
     
    )
}
export default Studentpage