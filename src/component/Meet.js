import React, {useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { gsap } from 'gsap';
import './meet.css';

import img_redirect from '../images/redirect.webp';
import img1 from '../images/BANGKOK.webp';
import img2 from '../images/KUALA.webp';
import img3 from '../images/JAKARTA.webp';


const Meet = () => {

    // const data = [
    //     { id: 1, img: img1, title: 'Real Estate',  },
    //     { id: 2, img: img2, title:"Hedge Funds" },
    //     { id: 3, img: img3, title:"Investment Banks & Advisors" },

    //     ];
     

    useEffect(()=>{

            // var imgs = jQuery('img-expand').children();
            // var contWidth = jQuery('#img-container').width();
            
            
            // var bigWidth = 30;
            // var smallWidth = (100 - bigWidth) / (imgs.length);
            // var mouseSmalLWidth = (100/imgs.length - 1);
            // var normalWidth = (100/ imgs.length);
            // // var smallWidth =  (contWidth - bigWidth) / (imgs.length - 1);
            
            // console.log(smallWidth);
            // console.log(bigWidth);
            // // console.log(imgs.length);
            // // console.log(contWidth);
            
            // jQuery('.img-expand').mouseover(function() {
            //   jQuery(this).stop().animate({
            //     // width: bigWidth+'%'
            //     width: '40%'
            //   }, 300);
              
            //   jQuery(this).siblings().stop().animate( {
            //     // width: smallWidth+'%'
            //     width: '15%'
            //   }, 300);
              
            // })
            
            // jQuery('.img-expand').mouseout(function(){
            //   jQuery(this).stop().animate({
            //     // width: smallWidth+'%'
            //     width: '20%'
            //   }, 300);
            //   jQuery(this).siblings().stop().animate( {
            //     // width: smallWidth+'%'
            //     width: '20%'
            //   }, 300);
            // })



            // const imgexpand = document.querySelector(".img-expand");
            // const hover = gsap.to(imgexpand, {
            // width:'40%',
            // color: "blue",
            // duration: 1.5,
            // paused: true,
            // ease: "ease-in-out"
            // });

            // imgexpand.addEventListener("mouseenter", () => hover.play());
            // imgexpand.addEventListener("mouseleave", () => hover.reverse());
            
          
        
          

    },[])

    // function expands(e) {
    //     alert("fsdfsdf"+e.target.className);
    //     console.log("fsdfsdf"+e.target.className);
    // }

    // const expand = (current) => {
      
    //     const imgexpands = document.querySelectorAll(".img-expand");
    //     console.log(imgexpands);

       
    //     for (let i = 0; i < imgexpands.length; i++) {
      
    //         gsap.to(imgexpands[i], {
    //             width:'20%',
    //             duration: 0.5,
    //             ease: "ease-in-out"
    //             });
    //     }

    //     //   console.log("current"+e.target.className);
    //     //   gsap.to(e, {
    //     //   width:'40%',
    //     //   duration: 0.5,
    //     //   ease: "ease-in-out"
    //     //   });
 

    // }    

    function MouseOver(event) {
        console.log( "event:"+event.target.classList.contains('img-expand'));
        console.log(event);
        

        const imgexpands = document.querySelectorAll(".img-expand1");
        console.log(imgexpands);

       
        for (let i = 0; i < imgexpands.length; i++) {
        
            //console.log("fsfsf"+imgexpands[i].classList);

          //  imgexpands[i].parentElement.style.width = '30%';
            var containerTrigger = imgexpands[i].closest('.img-expand');


            
            gsap.to(containerTrigger, {
                // width:'30%',
                className:"img-expand",
                // delay:0.1,
                 duration: 0,
                // ease: "power1.in"
                });

                

        }

        // event.target.parentElement.style.width = '60%';
        containerTrigger = event.target.closest('.img-expand');
        gsap.to(event.target.closest('.img-expand'), {
            // width:'60%',
            className:"img-expand full",
            // delay:0.1,
             duration: 0,
            // ease: "power1.in"
            });

            // gsap.to('.img-expand.full .text .head1, .img-expand .text .head2', {
            //   display:"none",
            //   delay:0,
            //   duration:0,
            //   ease: "power4.in"
            //   });

            // gsap.to('.img-expand.full .text .head1, .img-expand.full .text .head2', {
            //     display:"block",
            //     delay:0.5,
            //     duration:0.2,
            //     ease: "power4.in"
            // });
            


    }

        

  return (
    <section className='meet-section' >
    <Container fluid className='px-5p'>
        <Row className=''>
            <Col className='col-md-6'>
                <h3 className="heading mobile-view-heading">PUBCLUB  MEETS</h3>
            </Col>

            <Col className='col-md-6'>

                <div className="img-container me-auto">
                    
                    <div className='img-expand full' >
                      <img src={img1} className="img-expand1"  onMouseOver={MouseOver}  alt='' />
                      <div className='arrow'><a href="/"><img src={img_redirect} alt='' /></a></div>
                     <div className='text'>
                        <div className='head1'>BANGKOK</div>
                        <div className='head2'>MAR 3</div>
                      </div>
                    </div>

                    <div className='img-expand '>
                      <img src={img2} className="img-expand1"  onMouseOver={MouseOver}  alt='' />
                      <div className='arrow'><a href="/"><img src={img_redirect} alt='' /></a></div>
                      <div className='text'>
                        <div className='head1'>KUALA LUMPUR</div>
                        <div className='head2'>MAR 3</div>
                      </div>
                    </div>

                    <div className='img-expand ' >
                      <img src={img3} className="img-expand1"  alt=''  onMouseOver={MouseOver} />
                      <div className='arrow'><a href="/"><img src={img_redirect} alt='' /></a></div>
                      <div className='text'  onMouseOver={MouseOver} >
                        <div className='head1'>JAKARTA</div>
                        <div className='head2'>MAR 3</div>
                      </div>
                  
                    </div>

                    {/* <div className='img-expand ' onMouseOver={event=>expand()} > */}
              
                    {/* <img src="https://www.w3schools.com/css/trolltunga.jpg" className=" img-expand" onMouseOver={(e)=>{expand(e)}} alt='' />
                    <img src="https://www.w3schools.com/css/trolltunga.jpg" className="img-expand full" onMouseOver={(e)=>{expand(e)}} alt='' />
                    <img src="https://www.w3schools.com/css/trolltunga.jpg" className="img-expand" onMouseOver={(e)=>{expand(e)}} alt='' /> */}
                </div>


            </Col>
                
        </Row>
    </Container>

</section>
  )
}

export default Meet