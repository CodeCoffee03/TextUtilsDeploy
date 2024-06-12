import React,{useState} from 'react'


export default function TextForm(props) {
     const [text,setText] = useState("");
     const handleOnchange =(event)=>
          {
               setText(event.target.value)
               
          }
     const UperCaseconverter = ()=>
          {
               console.log(text);
               let Newtext = text.toUpperCase();
               setText(Newtext);
          }

          const wordCount = text.split(/\s+/).filter((element) => element.length !== 0).length;
     return (

          <>
               <div className='container'>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                         <textarea placeholder='Enter Something' className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
                    </div>
               </div>
               <button className="btn btn-primary" onClick={UperCaseconverter}>Convert to UpperCase</button>
               <div className="container">
                    <h3>Text Summary</h3>
                    <p>Word is {wordCount}</p>
                    <p> Character is {text.length}</p>
                    
                    <h1> noraml timetaken to read</h1>
                    <p>Time - {0.008 * wordCount}min</p>

                    <h2>Preview</h2>
                    <p>{text}</p>
               </div>
          </>

     )
}
