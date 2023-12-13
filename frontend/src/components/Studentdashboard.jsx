import {React} from "react"
import Header from "./Header"
const StudentDashboard=()=>{
    return(
        <div>
           <div className=" grid grid-cols-6">
            <div className=" bg-teal-400 h-screen w-28 col-span-1">
              <span>  <button>Dashboard</button> <br /> </span>
               <span> <button><a href="">Profile</a></button> <br /></span>
               <span> <button><a href="">Chale</a></button> <br /> </span>
              <span>  <button> <a href="">Logout</a></button> </span>
            </div>
             <div className=" col-start-2 col-span-5">
            <Header/>
              <div className=" mt-40">
                <span className="">
                    <button className=" bg-teal-400 h-10 w-72 rounded-md m-8 max-sm:w-40 ml-24" >Start New Application</button>
                    <button className=" border-black border-2 h-10 w-72 rounded-md max-sm:w-40 ml-24" >Explore Institutions</button>
                </span>
              </div>
              <div className=" bg-black w-full  mt-8 max-sm:ml-20" style={{height:"1px"}}></div>

              <div className="mt-6  ">
                <span className=" m-20 text-xl" >Date</span>
                <span className=" m-20  text-xl">Institution</span>
                <span className=" m-20  text-xl">Program</span>
                <span className=" m-20  text-xl">Status</span>
                <span className=" m-20 text-xl">Action</span>
              </div>

              <div className=" mt-32  ml-80 max-sm:mt-16">
                <p>You have not made any applications yet</p> 
                <span>  <button className=" border-2 border-teal-400 m-3  h-8 hover:bg-black  hover:text-white w-36"><a href="">Back</a></button>
                       <button type="submit" className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white">Save and Continue</button></span> 
                
            
               
              </div>
              </div>
           </div>
        </div>
    )

}
 export default StudentDashboard