import {react} from 'react'
import Student from '../components/Student'
import Institution from '../components/Institution'
import Header from '../components/Header'
const Index=()=>{
    return( 
        <div>

  <nav>
    <Header/>
  </nav>
    <div className=' pt-72 '>
      <h1 className=' text-9xl text-center font-serif max-sm:text-6xl '>AUCAS</h1>
    <h3 className=' text-center text-4xl font-serif'>Africa universities & colleges  application System</h3>
        <div className=' flex justify-center'>  <Student/>  <Institution /> </div>

     </div>

 </div>
     
    )
}
export default Index