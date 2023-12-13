import {React} from "react";
import { useState } from "react";
import Header from "./Header";
const Registerstudent=()=>{
    const [forms,setForms]=useState({
        profile:"", transcript:"",exams:false,university:"",region:""
    })
const onProfileChange=(e)=>{
    e.preventDefault()
    setForms({...forms,profile:e.target.value})
}

const onTranscriptChange=(e)=>{
    e.preventDefault()
    setForms({...forms,transcript:e.target.value})
}

const onUniversityChange=(e)=>{
    e.preventDefault()
    setForms({...forms,university:e.target.value})
}

const onRegionChange=(e)=>{
    e.preventDefault()
    setForms({...forms,region:e.target.value})
}
const onExamsChange=(e)=>{
    e.preventDefault()
    setForms({...forms,exams:true})
}





    return(
        <div>
            <nav>
               <Header/> 
            </nav>
            
          <h1 className=" text-5xl text-center font-serif">AUCAS</h1>
          
          
     <form action="" method="post" encType="multipart/form-data"> 
       <div className="flex justify-around max-sm:flex-wrap">

         <div>
         <h3 className="text-2xl font-semibold" > Profile Picture   </h3>
             <input type="file" name="profile" value={forms.profile} className=" mt-6"  onChange={onProfileChange}  /> <br />
             <label htmlFor="">Black and White Background and with 400px by 400px</label> <br />
             <h3 className="text-2xl font-semibold mt-6" > Result Document  </h3>
             <h5 className="italic">SHS Graduate</h5>
             <p>Upload Transcript</p>
             <input type="file" name="transcript" id="" onChange={onTranscriptChange} /> <button type="submit" className=" border-2 w-50 border-teal-400"> <a href="/Transcript">Submit results manually</a></button> <br />
             <input type="radio" name="exams" onChange={onExamsChange}  value="Resit" id="" /> <label htmlFor="">Re-Sit(Take AUCAS Standardised Test(AST) for Tertiary)</label> <br /> <br />
             <input type="radio" name="exams" onChange={onExamsChange}  value="waiting" id="" /> <label htmlFor="">Waiting</label> <br /> <br />
             <input type="radio" name="exams" onChange={onExamsChange}  value="shs" id="" /> <label htmlFor="">SHS1, SHS2</label> <br /> <br />
             <input type="radio" name="exams"  onChange={onExamsChange}  value="TAP" id="" /> <label htmlFor="">TAP(for continuing Tertiary Students and above)</label> <br /> <br />
             
             </div>

             <div className="mt-14 ">
          <label htmlFor="">Current or last Attended University</label> <br /> 
          <input type="text" name="university"  onChange={onUniversityChange} value={forms.university} className=" border-2 border-black" placeholder="University" /> <br /> <br />
          <label htmlFor="">Country</label> <br />
          <select name="region" onChange={onRegionChange} className=" w-80 h-10">Choose your Country
                            <option value="">choose your country</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Togo">Togo</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Burkina faso">Burkina faso</option>
                            <option value="South Africa">South Africa</option>
                            <option value="malawi">malawi</option>
                            <option value="Benin">Benin</option>
                            <option value="Ivory coast">Cote divoire</option>
                            <option value="liberia">Liberia</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Morroco">Morroco</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Guinea bisseau">Guinea Bissau</option>
                            <option value="Mali">Mali</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Angola">Angola</option>
                            <option value="Other">Other</option> 
                        </select> <br /> 
                        <div className=" mt-48 max-sm:mt-28">

                        <button className="border-teal-400 m-3 border-2  h-8 hover:bg-black  hover:text-white w-36"><a href="/SignupIndex">Back</a></button>
                       <button type="submit" className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white"> <a href="/Studentform">Save and Continue</a></button>
                       </div>
                        </div>
                       
                       </div>
                       </form>
                       
        </div>
        
    )

    
}
export default Registerstudent
