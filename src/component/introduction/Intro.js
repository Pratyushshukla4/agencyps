import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='intro'>
        
        <div className="intro1">
            <div className="intro11">

            <div className="creative">
                <h1 className='creative1'>Adventures in creative age</h1>
            </div>

            <div className="believe">
                <p className='believe1'>We believe that designing products and services in close partnership with our client is the only way to have a real impact on their business</p>
            </div>

            <div className="start-call">

                <span className="start">
                   <span className="start1">Start A Project</span> 
                </span>
                <span className="call">
                    <span className='call1'>Call Us (012) 345-678</span> 
                    <span className='call2'>For any question or concern</span>
                </span>
            </div>

            </div>
        </div>
        <div className="intro2">
            <img className='girl' src="/assests/girl3.png" alt="" />
        </div>
      
    </div>
  )
}

export default Intro
