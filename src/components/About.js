// import React, { useState } from 'react';

export default function About(props) {


    /*const [style , style] = useState({
        color:'black',
        backgroundColor:'white',
        border:'2px solid white'
    })
    const [btnState , myBtnState] = useState('Enable dark mode')

    const toggleStyle= ()=>{
        if(props.style.color ==='black'){

            style({
                color:'white',
                backgroundColor:'black'
            })
            myBtnState('Enable light mode')
        }
        else {
            style({
                color:'black',
                backgroundColor:'white'
            })
            myBtnState('Enable dark mode')
        }
    }*/
  return (
    <div className="container">
    <h1 className="my-3" style={{color:props.style.color==='white'?'white':'black'}}>About Us</h1>
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.style}>
            Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use </strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.style}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible </strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={props.style}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
            </div>
        </div>
    </div>
      {/* <div className="container my-3">
      <button onClick={toggleStyle} className="btn btn-primary" type="button">{btnState}</button>
      </div> */}
    </div>
  );
}
