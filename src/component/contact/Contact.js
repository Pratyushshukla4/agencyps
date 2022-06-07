import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='conatct'>
        <div className="contactleft">
            <div className="conatctleftwrapper">
                <div className="conttop">
            <span className="qstn">Question ?</span>
            <span className="touch qstn">Let's get in touch</span>
            </div>

            <div className="form">
                <div className="formleft">
                    <input placeholder='Name' type="text" className="name" />
                    <input placeholder='Email' type="text" className="email name" />
                    <input placeholder='Subject' type="text" className="subject name" />
                    
                </div>
                <div className="formright">
                    <textarea placeholder='Your massege' name="" id="" cols="30" rows="10" className="tarea"></textarea>
                    <button className="send">Send</button>
                </div>
            </div>
            </div>
        </div>
        <div className="contactright">
            <div className="contactrightwrapper">
                <div className="contactmap">
                    <img src="/assests/map.png" alt="" className="imgmap icc" />
                    <span className="mapaddress fc">Sector 62 Noida , Utter Pradesh</span>

                </div>
                <div className="contactphn contactmap">
                <img src="/assests/phone.png" alt="" className="imgphn icc" />
                <span className='phnnumber fc' > +919916578193 , +919912387456</span>

                </div>
                <div className="conatctemail contactmap">
                <img src="/assests/send.png" alt="" className="imgemail icc" />
                <span className="emailcon fc">pqr@email.com , xyx@gmail.com</span>

                </div>
            </div>
        </div>

        
      
    </div>
  )
}

export default Contact
