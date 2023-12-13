import {React} from "react";
import { useState } from "react";
import Header from "./Header";
const Institutionform=()=>{
    const [forms,setForms]=useState({
        profile:"", institutionName:"",officeEmail:"",summary:"",region:false,
        established:"",industry:false,country:false,abbreviations:"",programs:"",InstPictures:"",city:""
    })

    const onInstitutionNameChange=(e)=>{
        e.preventDefault()
        setForms({...forms,institutionName:e.target.value})
    }
    
    const onIndustryChange=(e)=>{
        e.preventDefault()
        setForms({...forms,industry:true})
    }
    
    const onRegionChange=(e)=>{
        e.preventDefault()
        setForms({...forms,region:true})
    }
    const onOfficeEmailChange=(e)=>{
        e.preventDefault()
        setForms({...forms,officeEmail:e.target.value})
    }

    const onSummaryChange=(e)=>{
        e.preventDefault()
        setForms({...forms,summary:e.target.value})
    }

    const onEstablishedChange=(e)=>{
        e.preventDefault()
        setForms({...forms,established:e.target.value})
    }
    const onCountryChange=(e)=>{
        e.preventDefault()
        setForms({...forms,country:true})
    }
    const onAbbreviationChangeChange=(e)=>{
        e.preventDefault()
        setForms({...forms,abbreviations:e.target.value})
    }
    const onProgramsChange=(e)=>{
        e.preventDefault()
        setForms({...forms,programs:e.target.value})
    }

    
    const onPictureChange=(e)=>{
        e.preventDefault()
        setForms({...forms,InstPictures:e.target.value})
    }
    const onCityChange=(e)=>{
        e.preventDefault()
        setForms({...forms,city:e.target.value})
    }




    return(
        <div>     
            <nav>
                <Header/>
            </nav>
          <form action="" method="post">
          <h1 className=" text-5xl text-center font-serif">AUCAS</h1>
            <h1 className=" text-center text-3xl my-6 ">Institution</h1>
            <div className=" flex justify-evenly  max-sm:flex-wrap"> 
                <div className=""> 
                    <label htmlFor="Region">Region</label> <br />
                        <select name="region" value={forms.region} onChange={onRegionChange} className=" w-80 h-10">Choose your Region
                            <option value="">choose your region</option>
                            <option value="Ashanti">Ashanti</option>
                            <option value="Western North">Western North</option>
                            <option value="Central">Central</option>
                            <option value="Eastern">Eastern</option>
                            <option value="Volta">Volta Region</option>
                            <option value="Greater Accra">Greater Accra</option>
                            <option value="Upper East">Upper East</option>
                            <option value="Upper West">Upper West</option>
                            <option value="Bono East">Bono East</option>
                            <option value="Brong Ahafo">Brong Ahafo</option>
                            <option value="Oti">Oti</option>
                            <option value="Savannah">Svannnah</option>
                            <option value="North Easr">North East</option>
                            <option value="Northern">Northern</option>
                        </select> <br />
                        <label htmlFor="Institution Name">Name of Institution</label> <br />
                        <input type="text" name="institutionName"  value={forms.institutionName} onChange={onInstitutionNameChange} placeholder="Name of Institution" className=" bg-slate-100 w-80 h-10" /> <br />


                        <label htmlFor="Office Email">Office Email</label> <br />
                        <input type="email" name="officeEmail" value={forms.officeEmail} onChange={onOfficeEmailChange}  placeholder="Office Email" className=" bg-slate-100 w-80 h-10" /><br />

                        <label htmlFor="Institution Summary">Institution Summary</label> <br />
                        <input type="text" name="summary" value={forms.summary} onChange={onSummaryChange}   placeholder="Institution Summary" className=" bg-slate-100 w-80 h-10" /> <br />


                        <label htmlFor="Year Established">Year Established</label> <br />
                        <input type="date" placeholder="Year Established" name="established" onChange={onEstablishedChange} value={forms.established} className=" bg-slate-100 w-80 h-10" /> <br />
                        <h2 className=" font-bold">Institution Category</h2>
                       <label htmlFor="">Professional</label> <input type="checkbox" name="industry" value="professional" onChange={onIndustryChange} />
                       <label htmlFor="">Government</label> <input type="checkbox" name="industry" value="Government" onChange={onIndustryChange} />
                       <label htmlFor="">Private</label> <input type="checkbox" name="industry" value="private"  onChange={onIndustryChange}/> <br />

                      

                    
                </div>
                
                <div> <label htmlFor="Region">Country</label> <br />
                        <select name="country" className=" w-80 h-10" value={forms.country} onChange={onCountryChange}>Choose your Country
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
                        <label htmlFor="Institution Name">Abbreviation</label> <br />
                        <input type="text" name="Abbreviation"  placeholder="Enter Abbreviation" value={forms.abbreviations} onChange={onAbbreviationChangeChange} className=" bg-slate-100 w-80 h-10" /> <br />
                        <label htmlFor="Programs">Programs</label> <br />
                        <input type="file" name="programs" value={forms.programs}  onChange={onProgramsChange} className=" bg-slate-100 w-80 h-10" /> <br />
                        <label htmlFor="Institution Pictures">Institution Pictures</label> <br />
                        <input type="file" name="institutionpictures" value={forms.InstPictures} onChange={onPictureChange}  className=" bg-slate-100 w-80 h-10" /> <br />
                        <label htmlFor="Institution Name">City</label> <br />
                        <input type="text" name="city" value={forms.city} onChange={onCityChange}  className=" bg-slate-100 w-80 h-10" placeholder="Enter your city" /> <br /> <br /> <br />
                        <button className=" border-2 border-teal-400 m-3  h-8 hover:bg-black  hover:text-white w-36"><a href="/SignupIndex">Back</a></button>
                       <button type="submit" className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white">Save and Continue</button>
                         </div>
            </div>

          </form>

        </div>
    )

    
}
export default Institutionform