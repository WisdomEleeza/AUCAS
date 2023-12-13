import {react} from 'react'
import Apply from './Apply'


const LandingPage=()=>{
    return( 
  <div>
    <nav>
    <div><img src="src/IMG-20230926-WA0031(1).jpg"  className="  right-12 h-8 fixed top-0" alt="" /> </div>
    </nav>
    <div className='flex justify-around'>
        <div>
          <img src="src/IMG-20230923-WA0002.jpg" alt="" style={{height:"100vh"}} className=' max-sm:h-24' />
        </div>
               
          <div><img src="src/IMG-20230923-WA0003.jpg" alt="" />
          <div className=' ml-60 mb-40'><Apply/></div>   
       </div> 
        
    </div>
 </div>
     
    )
}
export default LandingPage