import React from 'react'
// import { useState } from 'areact'

export default function About(props) {
    // const[myStyle,setmyStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white'
    // })
    // const [btnText, setBtnText] = useState("enable dark mode")

    // let toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color : 'white',
    //             backgroundColor : 'black'
    //         })
    //         setBtnText("enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         setBtnText("enable dark mode")
    //     }
    // }
    const myStyle ={
        color:props.mode ==='dark'?'white':'black',
        backgroundColor:props.mode ==='dark'?'rgb(20 66 138 / 1)':'white',
        // border:'2px solid black'
        borderBox:'none'

    }
    

    return (
        <div className = "container" style={{color:props.mode ==='light'?'white':'rgb(20 50 82)'}}>
        <h1 style={{color:props.mode ==='light'?'black':'white'}}>About us </h1>
        <div className="accordion" id="accordionExample" style = {myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {myStyle}>
                        Amalyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"      aria-labelledby="headingOne"data-bs-parent="#accordionExample">
                    <div className="accordion-body"style = {myStyle}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, untilthe collapse plugin adds the appropriate classes that we use to style each element.These classes control the overall appearance, as well as the showing and hiding via CSStransitions. You can modify any of this with custom CSS or overriding our defaultvariables. It's also worth noting that just about any HTML can go within the <code>accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style = {myStyle}>
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body"style = {myStyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                Browser compatible
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style = {myStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-3 ">
                {/* <button type="button" onClick= {toggleStyle} className="btn btn-primary">{btnText}</button> */}
        </div>
        </div>
    )
}
