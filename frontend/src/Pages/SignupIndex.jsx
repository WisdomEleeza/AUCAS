import {react} from 'react'
import StudentSignup from '../components/StudentSignup'
import InstitutionSignup from '../components/InstitutionSignup'
import Header from '../components/Header'

const SignupIndex=()=>{
    return( 
 <div>
    <nav>
        <Header/>
    </nav>

    <div className='pt-80 '>
      <h1 className=' text-9xl text-center font-serif'>AUCAS</h1>
    
        <div className=' flex justify-center'>  <StudentSignup  />  <InstitutionSignup /> </div>

     </div>

 </div>
     
    )
}
export default SignupIndex