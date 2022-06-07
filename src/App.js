import React from 'react'
// import Vedio from './component/vedio/vedio'
// import Video from './component/video/Video' <img src="/assests/girl3.png" alt="" className="serimg" />
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Animation from './component/animation/Animation'
import Features from './component/features/Features'
import Pricing from './component/pricing/Pricing'
import Service from './component/service/Service'
// import Vedio from './component/vedio/vedio'
import Intro from './component/introduction/Intro'
import Navbar from './component/navbar/Navbar'


const App = () => {
  return (
    <>
    {/* //  <div className='first'> */}
      <Navbar/>
      <Intro/>
      <Animation/>
      {/* </div>
      <div> */}
      
      <Features/>
      {/* // </div> */}
      <Service/>
      <Pricing/> 
      <Contact/>
      <Footer/>
     {/* <Video/> */}

            </>
  )
}

export default App
