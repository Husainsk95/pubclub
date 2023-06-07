import React, {useEffect} from 'react'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';
import "./header.css";
import Container from 'react-bootstrap/Container';
import headleft from '../images/head-left.webp';
import headright from '../images/head-right.webp';
// import Menu from './Menu';

gsap.registerPlugin(TextPlugin);



const Header = () => {

  useEffect(()=>{

      //let tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});
      let tl = gsap.timeline({repeat:-1, repeatDelay:1, speed:0.3, defaults: {duration: 2, ease: "power2.in"}})
      
      //  let t2 = gsap.timeline({repeat:-1, repeatDelay:0, speed:0.2, defaults: {duration: 2, ease: "none"},     scrollTrigger: {
      //   ease: "power1.out",
      //   trigger: ".whowrbg",
      //   // markers: true,
      //   start: "bottom bottom",
      //   scrub: false
      //  }})

          // tl.to(".text-slider", {
          //   gap: 0,
          //   delay: 0.3,
          //   speed:0.5,
          //   duration: "20ms",
          // });
          
          tl.to(".text-slide-box", {
            width:'0%',
            padding:'0px',
            scaleX:0.4,
            duration: 0,
          });

          tl.to(".text-slide", {
            text: "MEDIA COMPANIES",
            delay: 0,
            padding:'0 0px',
            duration: 0,
          });
    
          // tl.to(".text-slider", {
          //   gap: 20,
          //   delay: 0.3,
          //   speed:0.5,
          //   duration: "20ms",
          // });

          tl.to(".text-slide-box", {
            width:'auto',
            scaleX:1,
            padding:'0 10px',
            delay: 2,
            duration: 1.5,
        });


        tl.to(".text-slide-box", {
          width:'0%',
          padding:'0px',
          scaleX:0.4,
          delay: 2,
          duration: 1.5,
        }); 

        // tl.to(".text-slider", {
        //   gap: 0,
        //   delay: 0.3,
        //   speed:0.5,
        //   duration: "20ms",
        // });
        
        tl.to(".text-slide", {
          text: "Publishers",
          delay: 0,
          duration: 0,
        });
  
        // tl.to(".text-slider", {
        //   gap: 20,
        //   delay: 0.3,
        //   speed:0.5,
        //   duration: "20ms",
        // });

        tl.to(".text-slide-box", {
          width:'auto',
          padding:'0 10px',
          scaleX:1,
          delay: 1,
          duration: 1.5,
        });


        tl.to(".text-slide-box", {
          width:'0%',
          padding:'0px',
          scaleX:0.4,
          delay: 2,
          duration: 1.5,
        });

       
        tl.to(".text-slide", {
          text: "Creators",
          delay: 0,
          duration: 0,
        });
  
        tl.to(".text-slide-box", {
          width:'auto',
          padding:'0 10px',
          scaleX:1,
          delay: 1,
          duration: 1.5,
        });

        tl.to(".text-slide-box", {
          width:'0%',
          padding:'0px',
          scaleX:0.4,
          delay: 2,
          duration: 1.5,
        });

       
        /*tl.to(".text-slide", {
            text: "MEDIA COMPANIES",
            delay: 1,
            speed:0.5,
          });

          tl.to(".text-slide", {
            text: " ",
            delay: 1,
            speed:0.5,
          });

          tl.to(".text-slider", {
            gap: 0,
            delay: 0.3,
            speed:0.5,
            duration: "20ms",
          });

          tl.to(".text-slider", {
            gap: 20,
            delay: 0.3,
            speed:0.5,
            duration: "20ms",
          });

          tl.to(".text-slide", {
            text: "PUBCLUB",
            delay: 1,
            speed:0.5,
          });

          tl.to(".text-slide", {
            text: " ",
            delay: 1,
            speed:0.5,
          }); */

          // tl.to(".text-slider", {
          //   gap: 0,
          //   delay: "100ms",
          //   speed:0.5,
          //   duration: "100ms",
          // });

},[])


  return (
    <> 
    
    <header className='header-home '  > 

    <Container fluid className='hero px-5'>
      {/* <Menu /> */}
        
        
        <div className='hero-content'>
            
            <div className='hero-text'>
                <h2>EMPOWERING THE NEXT GEN OF</h2>
                <div className='text-slider'>
                  <img src={headleft} alt='left-capsule' />
                   <div className='text-slide-box'><h3 className="text-slide"> </h3></div>
                   <img src={headright} alt='right-capsule' />
                </div>
                <button className="applynow-btn mt-50 ms-3">APPLY TO JOIN</button>
            </div>
        </div>
    
     </Container>
     </header>
     </>
  )
}

export default Header
