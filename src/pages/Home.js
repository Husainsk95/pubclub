import React from 'react'


// import Menu from '../component/Menu';
import Header from '../component/Header';
import Vision from '../component/Vision';
import HoverTab from '../component/HoverTab';
import Meet from '../component/Meet';
// import Footer from '../component/Footer';


import tabimg1 from '../images/event.webp';
import tabhoverimg1 from '../images/event-hover.webp';
import tabcontentimg1 from '../images/event-hover-img.webp';
import tabimg2 from '../images/video.webp';
import tabhoverimg2 from '../images/video-hover.webp';
import tabcontentimg2 from '../images/video-hover-img.webp';
import tabimg3 from '../images/exclusive.webp';
import tabhoverimg3 from '../images/exclusive-hover.webp';
import tabcontentimg3 from '../images/exclusive-hover-img.webp';

const Home = () => {

  const hovertabdata = [
    {
        "id":1,
        "tabname":"tab1",
        "tabimg":tabimg1, 
        "tabheading":"OPPORTUNITY TO NETWORK WITH THOUGHT LEADERS IN THE AD TECH INDUSTRY",     
        "tabhoverimg":tabhoverimg1,        
        "tabcontentimg":tabcontentimg1        
    },
    {
        "id":2,
        "tabname":"tab2",
        "tabimg":tabimg2, 
        "tabheading":"Elevate your thought leadership through a high-quality video series, sponsored events, webinars, and awards",     
        "tabhoverimg":tabhoverimg2,        
        "tabcontentimg":tabcontentimg2       
    },
    {
        "id":3,
        "tabname":"tab3",
        "tabimg":tabimg3, 
        "tabheading":"Exclusive access to events such as roadshows and bootcamps",     
        "tabhoverimg":tabhoverimg3,        
        "tabcontentimg":tabcontentimg3        
    }

]

const title = "MEMBER BENEFITS";

  return (
    <>
       {/* <Menu />  */}
       <Header /> 
       <Vision />
       <HoverTab data={hovertabdata} title={title} class={"memberbenefits"} />
       <Meet />
       {/* <Footer />   */}
    </>
  )
}

export default Home
