import {react} from "react"
import Login from "../components/Login";
import Signup from "../components/Signup";
import Header from "../components/Header";
const Homepage=()=>{
    return(
        <div>
            <nav>
           <Header/>
            </nav>
          <div className='pt-72 '>
      <h1 className=' text-9xl text-center font-serif max-sm:text-6xl'>AUCAS</h1>
      <h3 className=' text-center text-4xl font-serif'>Africa universities & colleges  application System</h3>
        <div className=' flex justify-center'>  <Login/>  <Signup /> </div>

     </div>
        </div>
    )
}
export default Homepage;