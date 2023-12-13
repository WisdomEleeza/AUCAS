import {React} from "react";
import { useState } from "react";
import Header from "./Header";
const Transcript=()=>{
const [transcript,setTranscript]=useState({
    mathematics:"", english:"", science:"",social:"",
    subject1:"", subject2:"", subject3:"",subject4:"",
    grade1:'', grade2:"", grade3:"", grade4:""
})
const onMathsChange=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,mathematics:e.target.value})
}

const onEnglishChange=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,english:e.target.value})
}

const onScienceChange=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,science:e.target.value})
}
const onSocialChange=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,social:e.target.value})
}

const onSubject1Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,subject1:e.target.value})
}

const onSubject2Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,subject2:e.target.value})
}

const onSubject3Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,subject3:e.target.value})
}


const onGrade1Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,grade1:e.target.value})
}


const onGrade2Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,grade2:e.target.value})
}


const onGrade3Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,grade3:e.target.value})
}

const onGrade4Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,grade4:e.target.value})
}

const onSubject4Change=(e)=>{
    e.preventDefault()
    setTranscript({...transcript,subject4:e.target.value})
}

    return(
        <div>
            <nav>
                <Header/>
            </nav>
          <h2 className="text-center font-bold text-3xl">Transcript</h2>
          <p className=" italic text-center">Kindly fill in your relevant SHS transcript results</p>
           <h4 className="mt-14  ml-48 font-bold text-xl max-sm:ml-2">Core Subjects</h4>
           <form action="" method="post">
           <div className="flex justify-around max-sm:flex-wrap">
           
            <div className=" max-sm:mr-24">
            <label htmlFor="mathematics">Mathematics</label> <br />
           <input type="text" placeholder="Mathematics Grade" name="maths"  onChange={onMathsChange} value={transcript.mathematics} className=" border-2 border-black"/> <br /> <br />

           <label htmlFor="english">English</label> <br />
           <input type="text" placeholder="English Grade" value={transcript.english}  onChange={onEnglishChange}  name="english" className=" border-2 border-black"/> <br /> <br />
           <h4 className="mt-14  ml-2 font-bold text-xl">Elective Subjects</h4>

           <div>
            <label htmlFor="">Subject1</label> <br />
           <input type="text" placeholder="subject" name="subject1"  onChange={onSubject1Change} value={transcript.subject1}  className=" border-2 border-black"/> <br /> <br />
           <label htmlFor="">Grade</label> <br />
           <input type="text" placeholder="grade"  name="grade1" onChange={onGrade1Change} value={transcript.grade1} className=" border-2 border-black"/> <br /> <br />
           <label htmlFor="">Subject2</label> <br />
           <input type="text" placeholder="subject"  name="subject2"  onChange={onSubject2Change} value={transcript.subject2} className=" border-2 border-black"/> <br /> <br />
           <label htmlFor="">Grade</label> <br />
           <input type="text" placeholder="grade" value={transcript.grade2} onChange={onGrade2Change} name="grade2" className=" border-2 border-black"/> <br /> <br />
           
           
           </div>

           </div>
            <div>
            <label htmlFor="science">Integrated Science</label> <br />
           <input type="text" placeholder="Science Grade" name="science" onChange={onScienceChange} value={transcript.science} className=" border-2 border-black"/> <br /><br />

           <label htmlFor="social">Social</label> <br />
           <input type="text" placeholder="Social Grade" name="social" onChange={onSocialChange} value={transcript.social} className=" border-2 border-black"/> <br /> <br /> <br /> <br /> <br />

           <div>
            <label htmlFor="">Subject3</label> <br />
           <input type="text" placeholder="subject" value={transcript.subject3}  onChange={onSubject3Change} name="subject3" className=" border-2 border-black"/> <br /> <br />
           <label htmlFor="">Grade</label> <br />
           <input type="text" placeholder="grade" name="grade3" value={transcript.grade3}  onChange={onGrade3Change} className="border-2 border-black"/> <br /> <br />
           <label htmlFor="">Subject4</label> <br />
           <input type="text" placeholder="subject" value={transcript.subject4}   onChange={onSubject4Change}  name="subject4" className=" border-2 border-black"/> <br /> <br />
           <label htmlFor="">Grade</label> <br />
           <input type="text" placeholder="grade" name="grade4"  value={transcript.grade4} onChange={onGrade4Change} className=" border-2 border-black"/> <br /> <br />
           <button className=" border-teal-400 border-2 bg-white m-3  h-8 hover:bg-black  hover:text-white w-36"><a href="/Studentregister">Back</a></button>
           <button  type="submit" className=" bg-teal-400 m-3  h-8 hover:bg-black  hover:text-white">Save and Continue</button>

            </div>


            </div>


           </div>
                      
           </form>
           
        </div>
    )

    
}
export default Transcript