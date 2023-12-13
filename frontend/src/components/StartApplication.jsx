import {React} from "react"
import Header from "./Header"
const StartApplication=()=>{
    return(
        <div>
            <Header/>

            <a href="" className=" text-blue-500 mt-8">Add another +</a>
            <form action="" method="post">
                <div className=" flex justify-around mt-10">
                    <div>
                        <h1 className=" font-bold text-xl">Institution</h1>
                        <input className=" rounded-md h-10 border-2 border-black" type="search" name="institution" placeholder="Search" id="" />
                        <p className=" mt-4">If not in list Provide</p>
                        <input className=" rounded-md h-10 border-2 border-black" type="search" name="institution" placeholder="Type here" id="" /> <br /> <br />

                        <input type="checkbox" name="" id="" /> <span>Undecided</span>
                        <p>(speak to an advisor?)</p> <br /> <br />
                        <small className="ml-4" >(Add an essay)</small> <br />
                        <button type="submit" className=" bg-teal-300 bg-t m-3 w-40 rounded-md  h-8 hover:bg-black  hover:text-white">Add an Essay</button>
                        <div className="mt-20">
                          <button type="submit" className=" bg-teal-300  w-40 rounded-md  h-8 hover:bg-black  hover:text-white">Save and Continue</button> 
                          </div>
                    </div>
                   
                    <div>
                        <h1 className="font-bold text-xl">Program</h1>
                        <input className=" rounded-md h-10 border-2 border-black" type="search" name="program" placeholder="program" id="" />
                        <p className=" mt-8">(speak to an advisor?)</p>
                        <div className=" flex  mt-44 justify-around">
                        <div className="ml-20">
                          <button type="submit" className=" bg-teal-300  w-40 rounded-md  h-8 hover:bg-black  hover:text-white">Add Report </button> 
                          </div>

                          <div className="ml-20">
                          <button type="submit" className=" bg-teal-300  w-40 rounded-md  h-8 hover:bg-black  hover:text-white">Add Transcript</button> 
                          </div>

                         
                        </div>
                        
                         
                          
                         
                        </div>
                    <div>
                        <h1 className="font-bold text-xl" >Career</h1>
                        <input className=" rounded-md h-10 border-2 border-black" type="search" name="career" placeholder="career" id="" />
                        <p className=" mt-8">(speak to an advisor?)</p>
                        <div className=" flex  mt-44 justify-evenly">
                        
                          <div>
                          <button type="submit" className=" bg-teal-300  w-40 rounded-md  h-8 hover:bg-black  hover:text-white">Add Certificate</button> 
                          </div>

                          
                        </div>

                    </div>
                </div>
            </form>
           
        </div>
    )

}
 export default StartApplication