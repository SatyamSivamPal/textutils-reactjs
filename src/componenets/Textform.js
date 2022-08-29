import React, {useState} from 'react'


export default function Textform(props) {

   let mystyle={
    color:'red',
    backgroundcolor : 'cyan'
   }

     const uppercase = ()=>{
        
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("converted to uppercase","success");
     }  
     const handleonchange = (event)=>{
        console.log("on change")
        settext(event.target.value)
     }
     const lowercase = ()=>{
          let newtext = text.toLowerCase();
          settext(newtext);
          props.showalert("converted to lowercase","success");
     }

    const [text,settext] = useState('');
  return (
   <>
    <div className='container' style={{backgroundColor : props.mode === 'dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}}>
      
  

<h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange= {handleonchange} style={{backgroundColor : props.mode === 'dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>
<button className='btn-primary mx-2 my-2' onClick={uppercase}>Convert To Uppercase</button>
<button className='btn-primary mx-2 my-2' onClick={lowercase}>Convert To Lowercase</button>
</div>
<div className="container" >
  <h2>Your text summary </h2>
  <p>{text.length} characters and {text.split(" ").length}</p>
  <p>{0.08*text.split(" ").length} Minutes to read all the word</p>
  <h2>Preview</h2>
  {text.length>0?text:"Enter here to preview"}
</div>
</>
  )
}
