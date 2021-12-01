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
    const emptyText  = ()=>{
        props.showAlert('Pease enter the text first!','Failure')
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} id="myBox" rows="8" placeholder="Enter your text here" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick = {text!==''?handleUpClick:emptyText} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick = {text!==''?handleLowClick:emptyText} >Convert to lowercase</button>
            <button className="btn btn-primary" onClick = {text!==''?handleClearClick:emptyText} >Clear text</button>
            <button className="btn btn-primary mx-2" onClick = {text!==''?removeSpaceClick:emptyText} >Remove Extra spaces</button>
        </div>
        <div className ='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text summary</h2>
            <p>{text===''?0:text.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(' ').length} words and {text===''?0:text.split(/[ ]+/).join(' ').length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview it here'}</p>
        </div>
        </>
    )
}
