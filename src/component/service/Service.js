import React, { useState } from 'react'
import Video from '../video/Video'
import "./Service.css"
const Service = () => {

  const [click , setclick] = useState(false)

  const handleclick =()=>{
    setclick(true)
  }

  return (

    
    <div className='service'>

        <div className="serleft vd">

          {
            click ? <Video className="v"/> :  <img src="/assests/girl3.png" alt="" className="serimg" />
          }

        {/* <img src="/assests/girl3.png" alt="" className="serimg" /> */}

        </div>
        <div className="serright">
            <div className="serrightwrapper">
            <h1 className='h1ser'>Simple process to start</h1>

            <p className='p1ser'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam officiis voluptates adipisci, quaerat nesciunt vitae praesentium nulla voluptatum alias, facere a eos ad reiciendis suscipit?</p>

            <div className="rightbottom">
                <div className="bottomleft  bll">
                <i class="fa-solid fa-magnifying-glass sericon"></i>
                <p className='p2ser'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia.</p>
                </div>
                <div className="bottomcenter ggg">
                <i class="fa-solid fa-magnifying-glass sericon"></i>
                <p className='p2ser'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia.</p>
                </div>
                <div className="bottomright bll">
                <i class="fa-solid fa-magnifying-glass sericon"></i>
                <p className='p2ser'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia.</p>
                </div>
                </div>

                <div className="bottombtn">
                    <button onClick={()=>handleclick()} className="btnser">
                        How it work
                    </button>
                
            </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default Service
