import React from 'react'
import "./Features.css"

const Features = () => {
  return (
    <div className='features'>
        <div className="leftf1">
            <div className="phoneimg">
                <img  src="/assests/phn5.png" alt="" className="phn" />
            </div>

        </div>

        <div className="rightf2">
            <div className="rightfwrapper">

                <div className="right1">
                    <h1 className='h1'> <span className='sp'> Good </span> Design</h1>
                    <h1 className='h1' ><span  className='sp'> Good </span> Business</h1>
                </div>
                <div className="right2">
                    <p className='rp'>We know that good design means good business</p>
                </div>
                <div className="right3">
                    <p className='rp2'>we help our clients succeed  by creating brand identities, digital experience and print material Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, sapiente?</p>
                </div>
                <div className="right4">
                    <p className='rp3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio voluptates quidem exercitationem.</p>
                </div>
                <div className="right5">
                    <span className="fbtn">
                        Learn More
                    </span>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Features
