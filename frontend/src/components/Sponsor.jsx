import {React} from "react";
const Sponsor=()=>{




    return(
        <div>
          <form action="" method="post">
            <h1 className=" text-center text-8xl my-6 ">Aucas</h1>

            <h3 className=" ml-56 font-bold text-3xl">Sponsor1</h3>
                    <p className="ml-56 text-lg" >If, self fill in your own details</p>
            <div className=" flex justify-evenly mt-2"> 
                <div> 
                    <label htmlFor="firstName">FirstName</label> <br /> 
                    <input type="text" name="firstname" placeholder="firstname" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Email">Email</label> <br /> 
                    <input type="email" name="email" placeholder="email" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Residence Address">Residence Address</label> <br />  
                    <input type="text" name="residence" placeholder="residence " className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="occupation">Occupation</label> <br />  
                    <input type="text" name="occupation" placeholder="occupation" className="border-2 border-black" /> <br /> <br />
                    <h3 className="  font-bold text-3xl">Sponsor2</h3>
                    <p className=" text-lg" >If, a different person</p>
                    <label htmlFor="firstName">FirstName</label> <br /> 
                    <input type="text" name="firstname" placeholder="firstname" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Email">Email</label> <br /> 
                    <input type="email" name="email" placeholder="email" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Residence Address">Residence Address</label> <br />  
                    <input type="text" name="residence" placeholder="residence " className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="occupation">Occupation</label> <br />  
                    <input type="text" name="occupation" placeholder="occupation" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="">Student Loan</label> <input type="checkbox" name="loan" id="" /> <br />
                    <label htmlFor="">Requesting Sponsorship</label> <input type="checkbox" name="sponsorship" id="" /> <br /> <br />
                    <label htmlFor="">Have scholarship</label> <input type="checkbox" name="sponsorship" id=""  checked/> <br />
                    <input type="file" name="scholarship" id="" /> <br /> <br />
                    <button className=" border-2 border-teal-400 m-3  h-8 hover:bg-black  hover:text-white w-36"><a href="/SignupIndex">Back</a></button>
                       <button className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white w-36">Submit</button>








                    
                </div>
                
                <div> 
                <label htmlFor="lastName">Last Name</label> <br /> 
                    <input type="text" name="lastname" placeholder="lastname" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="">phone</label> <br /> 
                    <input type="number" name="number" placeholder="number" className="border-2 border-black" /> <br /> <br />
                    
                    <label htmlFor="Work Address">Work Address</label> <br /> 
                    <input type="text" name="work address" placeholder="work address" className="border-2 border-black" /> <br /> <br />
                    
                    <label htmlFor="password">Relation</label> <br /> 
                    <input type="text" name="relation" placeholder="relation" className="border-2 border-black" /> <br /> <br /> <br /> <br />


                    <label htmlFor="lastName">Last Name</label> <br /> 
                    <input type="text" name="lastname" placeholder="lastname" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="">phone</label> <br /> 
                    <input type="number" name="number" placeholder="number" className="border-2 border-black" /> <br /> <br />
                    
                    <label htmlFor="Work Address">Work Address</label> <br /> 
                    <input type="text" name="work address" placeholder="work address" className="border-2 border-black" /> <br /> <br />
                    
                    <label htmlFor="password">Relation</label> <br /> 
                    <input type="text" name="relation" placeholder="relation" className="border-2 border-black" /> <br /> <br />
                   
                   
     
                </div>
            </div>


     
                
            

          </form>

        </div>
    )

    
}
export default Sponsor