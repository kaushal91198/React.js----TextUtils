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
    }
    const handleLowClick = ()=>{
        // console.log("lowercase clicked")
        let newText =  text.toLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        // console.log("text clicked")
        let newText =  ""
        setText(newText)
    }
    const removeSpaceClick = ()=>{
        // console.log("copy text clicked")
        let newText = text.split(/[ ]+/).join(' ')
        // let newText =  text.replace(/\s+/g, ' ').trim()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log('onclick clicked')
        setText(event.target.value)
        //see video at 19.03
    }
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8" placeholder="Enter your text here"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleLowClick} >Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick = {handleClearClick} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick = {removeSpaceClick} >Remove Extra spaces</button>
        </div>
        <div className ='container my-3 '>
            <h2>Your Text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
