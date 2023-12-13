import {React} from "react";
import { useState } from "react";
const Studentform=()=>{
    const [forms,setForms]=useState({
        firstName:"", email:"",ResidenceAddress:"",occupation:"",country:false,
        dateOfBirth:"",phone:"",city:"",password:"",lastname:"",gender:true,workAddress:"",id:""
    })
const onFirstNameChange=(e)=>{
    e.preventDefault()
    setForms({...forms,firstName:e.target.value})
}

const onEmailChange=(e)=>{
    e.preventDefault()
    setForms({...forms,email:e.target.value})
}

const onResidenceAddressChange=(e)=>{
    e.preventDefault()
    setForms({...forms,ResidenceAddress:e.target.value})
}

const onCountryChange=(e)=>{
    e.preventDefault()
    setForms({...forms,country:false})
}
const onOccupationChange=(e)=>{
    e.preventDefault()
    setForms({...forms,occupation:e.target.value})
}

const onPhoneChange=(e)=>{
    e.preventDefault()
    setForms({...forms,phone:e.target.value})
}

const onWorkAddressChange=(e)=>{
    e.preventDefault()
    setForms({...forms,workAddress:e.target.value})
}

const onCityChange=(e)=>{
    e.preventDefault()
    setForms({...forms,city:e.target.value})
}

const onPasswordChange=(e)=>{
    e.preventDefault()
    setForms({...forms,password:e.target.value})
}

const onLastNameChange=(e)=>{
    e.preventDefault()
    setForms({...forms,lastname:e.target.value})
}
const onGenderChange=(e)=>{
    e.preventDefault()
    setForms({...forms,gender:e.target.checked})
}
const onNationalIdChange=(e)=>{
    e.preventDefault()
    setForms({...forms,id:e.target.value})
}


const onDateOfBirthChange=(e)=>{
    e.preventDefault()
    setForms({...forms,dateOfBirth:e.target.value})
}







    return(
        <div>
          <form action="" method="post">
            <h1 className=" text-center text-6xl my-6 font-Times New Roman ">AUCAS</h1>
            <h1 className=" text-center text-3xl my-6 ">Student</h1>
            <div className=" flex justify-evenly"> 
                <div> 
                    <label htmlFor="firstName">FirstName</label> <br /> 
                    <input type="text" name="firstname" value={forms.firstName} onChange={onFirstNameChange} placeholder="firstname" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Email">Email</label> <br /> 
                    <input type="email" name="email"  value={forms.email}  onChange={onEmailChange} placeholder="email" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Residence Address">Residence Address</label> <br />  
                    <input type="text" name="residence" value={forms.ResidenceAddress} onChange={onResidenceAddressChange}  placeholder="residence " className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="occupation">Occupation</label> <br />  <br />
                    <input type="text" name="occupation"  value={forms.occupation}   onChange={onOccupationChange} placeholder="occupation" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="date Of birth">Date Of birth</label> <br /> 
                    <input type="date" name="dateOfbirth" value={forms.dateOfBirth} onChange={onDateOfBirthChange} placeholder="birthdate" className="border-2 border-black" /> <br /> <br />
                    <label htmlFor="Region">Country</label> <br /> 
                        <select name="country" value={forms.country} onChange={onCountryChange} className=" w-80 h-10">Choose your Country
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
                        </select> <br /> <br /> <br /> <br />
                        
                       

                       <button className=" border-2 border-teal-400 m-3  h-8 hover:bg-black  hover:text-white w-36"><a href="/SignupIndex">Back</a></button>
                       <button className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white">Save and Continue</button>

                    
                </div>
                
                <div> 
                <label htmlFor="lastName">Last Name</label> <br /> 
                    <input type="text" name="lastname" placeholder="lastname" value={forms.lastname} onChange={onLastNameChange}  className="border-2 border-black" /> <br /> <br />


                    <label htmlFor="">phone</label> <br /> 
                    <input type="number" name="phone" placeholder="number" value={forms.phone} onChange={onPhoneChange} className="border-2 border-black" /> <br /> <br />


                    <label htmlFor="gender">gender</label> <br /> Male
                    <input type="radio" checked={forms.gender}  name="gender" value="male" className="border-2 border-black" onChange={onGenderChange} /> female 
                    <input type="radio"  checked={forms.gender} name="gender"  value="female" className="border-2 border-black"  onChange={onGenderChange} /> <br /> <br />

                    <label htmlFor="Work Address">Work Address</label> <br /> 
                    <input type="text" name="workAddress" value={forms.workAddress} onChange={onWorkAddressChange} placeholder="work address" className="border-2 border-black" /> <br /> <br />


                    <label htmlFor="city">City</label> <br /> 
                    <input type="text" name="city" placeholder="city" value={forms.city} onChange={onCityChange} className="border-2 border-black" /> <br /> <br />

                    <label htmlFor="password">password</label> <br /> 
                    <input type="password" name="password" value={forms.password} onChange={onPasswordChange} placeholder="password" className="border-2 border-black" /> <br /> <br />

                    <label htmlFor="city">National ID</label> <br />  
                    <input type="file" name="id"  value={forms.id} onChange={onNationalIdChange} className="border-2 border-black" /> <br />

                      
                </div>
            </div>

          </form>

        </div>
    )

    
}
export default Studentform