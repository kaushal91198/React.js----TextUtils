import React, { useState } from 'react';
// import PropTypes from 'prop-types'


//changing the state see video 7 at 14.00 
export default function TextForm(props) {
    const [text,setText] = useState('');
    //text = 'new text' // wrong way to change the state
    //setText = 'new text' //correct way to change the state

    const handleUpClick = ()=>{
        // console.log('uppaercase clicked' + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Uppercase!','Success')
    }
    const handleLowClick = ()=>{
        // console.log("lowercase clicked")
        let newText =  text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lowercase!','Success')
    }
    const handleClearClick = ()=>{
        // console.log("text clicked")
        let newText =  ""
        setText(newText)
        props.showAlert('Text Cleard!','Success')
    }
    const removeSpaceClick = ()=>{
        // console.log("copy text clicked")
        let newText = text.split(/[ ]+/).join(' ')
        // let newText =  text.replace(/\s+/g, ' ').trim()
        setText(newText)
        props.showAlert('Extra Spaces Cleard!','Success')
    }

    const handleOnChange = (event)=>{
        // console.log('onclick clicked')
        setText(event.target.value)
        //see video at 19.03
    }
 
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-4 '>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8" placeholder="Enter your text here" style={{backgroundColor:props.mode==='dark'?'#052f51':'white'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 border border-dark" onClick = {handleUpClick} >Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 border border-dark" onClick = {handleLowClick} >Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 border border-dark" onClick = {handleClearClick} >Clear text</button>
            <button disabled={text.length===0} className="btn btn-success mx-1 my-1 border border-dark" onClick = {removeSpaceClick} >Remove Extra spaces</button>
        </div>
        <div className ='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text===''?0:text.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(' ').length} words and {text===''?0:text.split(/[ ]+/).join(' ').length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Nothing to preview'}</p>
        </div>
        </>
    )

}

// we can put text.split(" ").filter((element)=>{return element.length!==0}).length