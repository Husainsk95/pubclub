import React from 'react'
import HeaderMembeni from '../component/HeaderMembeni'
import HoverTab from '../component/HoverTab'
import Exclusive from '../component/Exclusive'
// import Menu from '../component/Menu';
// import Footer from '../component/Footer';



// import tabimg1 from '../images/event.webp';
// import tabhoverimg1 from '../images/event-hover.webp';
// import tabcontentimg1 from '../images/ex-benefit1.webp';
// import tabimg2 from '../images/video.webp';
// import tabhoverimg2 from '../images/video-hover.webp';
// import tabcontentimg2 from '../images/ex-benefit2.webp';
// import tabimg3 from '../images/exclusive.webp';
// import tabhoverimg3 from '../images/exclusive-hover.webp';
// import tabcontentimg3 from '../images/ex-benefit3.webp';
// import tabimg4 from '../images/exclusive.webp';
// import tabhoverimg4 from '../images/exclusive-hover.webp';
// import tabcontentimg4 from '../images/ex-benefit4.webp';
// import tabimg5 from '../images/exclusive.webp';
// import tabhoverimg5 from '../images/exclusive-hover.webp';
// import tabcontentimg5 from '../images/ex-benefit5.webp';



import tabimg1 from '../images/Network.webp';
import tabhoverimg1 from '../images/Network-hover.webp';
import tabcontentimg1 from '../images/ex-benefit1.webp';
import tabimg2 from '../images/Boost.webp';
import tabhoverimg2 from '../images/boost-hover.webp';
import tabcontentimg2 from '../images/ex-benefit2.webp';
import tabimg3 from '../images/Elevate.webp';
import tabhoverimg3 from '../images/Elevate-hover.webp';
import tabcontentimg3 from '../images/ex-benefit3.webp';
import tabimg4 from '../images/exclusive.webp';
import tabhoverimg4 from '../images/exclusive-hover.webp';
import tabcontentimg4 from '../images/ex-benefit4.webp';
import tabimg5 from '../images/Ultimate.webp';
import tabhoverimg5 from '../images/Ultimate-hover.webp';
import tabcontentimg5 from '../images/ex-benefit5.webp';



const hovertabdata = [
  {
      "id":1,
      "tabname":"tab1",
      "tabimg":tabimg1, 
      "tabheading":"Network with industry leaders and learn about localized marketing challenges and solutions.",     
      "tabhoverimg":tabhoverimg1,        
      "tabcontentimg":tabcontentimg1        
  },
  {
      "id":2,
      "tabname":"tab2",
      "tabimg":tabimg2, 
      "tabheading":"Boost personal brand through social media features and media publications.",     
      "tabhoverimg":tabhoverimg2,        
      "tabcontentimg":tabcontentimg2       
  },
  {
      "id":3,
      "tabname":"tab3",
      "tabimg":tabimg3, 
      "tabheading":"Elevate thought leadership through webinars, interviews, podcasts, and awards.",     
      "tabhoverimg":tabhoverimg3,        
      "tabcontentimg":tabcontentimg3        
  },
  {
    "id":4,
    "tabname":"tab4",
    "tabimg":tabimg4, 
    "tabheading":"Exclusive access to roadshows, boot camps, and Ad Tech events.",     
    "tabhoverimg":tabhoverimg4,        
    "tabcontentimg":tabcontentimg4        
  },
  {
    "id":5,
    "tabname":"tab5",
    "tabimg":tabimg5, 
    "tabheading":"Unlimited content from key publishers and decision-makers in the industry.",     
    "tabhoverimg":tabhoverimg5,        
    "tabcontentimg":tabcontentimg5        
  }
]

const title = "EXCLUSIVE MEMBERSHIP BENEFITS";
const button = "APPLY TO JOIN";

const MemberBenefits = () => {
  return (
    <>
     {/* <Menu />  */}
     <HeaderMembeni /> 
     <HoverTab data={hovertabdata} title={title} button={button} class={"ex-memberbenefits"} />
     <Exclusive />
      {/* <NavLink to='/pubclub-benefit'><button className='btn btn-success'>pubclubbenfit</button></NavLink>  */}
     {/* <Footer />   */}
    </>
  )
}

export default MemberBenefits