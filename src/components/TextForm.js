import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick=(event)=>{
        console.log("Uppercase Button Clicked!!")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLwClick=()=>{
        console.log("Lowercase Button Clicked!!")
        let newText=text.toLowerCase();
        setText(newText);  
    }
    const handleClearClick=()=>{
        console.log("Clear Button Clicked!!")
        let newText='';
        setText(newText);  
    }
    const handleOnChange=(event)=>{
        console.log("Handle on change clicked!!")
        setText(event.target.value)
    }
    const handleCopyClick=()=>{
        var text1= document.getElementById("exampleFormControlTextarea1");
        text1.select(); 
        navigator.clipboard.writeText(text1.value);
        props.alert("Copied to cliboard!!","success")
       
    }
    return (
        <>       
        <div className='container' style={{color : props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode ==='light'?'white':'#13466e', color : props.mode ==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.mode ==="green"?"success":"primary"} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode ==="green"?"success":"primary"} mx-1 my-1`} onClick={handleLwClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode ==="green"?"success":"primary"} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-${props.mode ==="green"?"success":"primary"} mx-1 my-1`} onClick={handleCopyClick}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode ==='light'?'black':'white'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'No text to preview!!'}</p>
        </div>
        </>
        
    )
}
