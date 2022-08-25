import React,{useState} from 'react'
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Uppercase successfully!", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Upper was clicked");
        let newtext = " ";
        setText(newtext)   
            props.showAlert("Text are cleared!", "success");
    }
    const hanndleCopy = ()=>{
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboad!", "success");
        
    }
    const handleLoClick = ()=>{ 
        console.log("Upper was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Lowercase successfully!", "success");
    }
    const handleOnChange = (event)=>{
        console.log("onChange is going");
        setText(event.target.value);
    }
    const [text,setText]= useState('');
    return (
        <>
        <div className = 'container' style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text} id="box" onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'rgb(90 87 87)'}} rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0}  className="btn btn-primary my-1" onClick={hanndleCopy}>Copy text </button>
        </div>
        <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}}>
            <h1>Your text summry</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} letter</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}
