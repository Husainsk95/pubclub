import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';


// import tabimg1 from '../images/event.webp';
// import tabhoverimg1 from '../images/event-hover.webp';
// import tabcontentimg1 from '../images/event-hover-img.webp';
// import tabimg2 from '../images/video.webp';
// import tabhoverimg2 from '../images/video-hover.webp';
// import tabcontentimg2 from '../images/video-hover-img.webp';
// import tabimg3 from '../images/exclusive.webp';
// import tabhoverimg3 from '../images/exclusive-hover.webp';
// import tabcontentimg3 from '../images/exclusive-hover-img.webp';


import './hovertab.css'

const HoverTab = (props) => {

    const [activeTab, setActiveTab] = useState("tab1");

    // const data = [
    //     {
    //         "id":1,
    //         "tabname":"tab1",
    //         "tabimg":tabimg1, 
    //         "tabheading":"OPPORTUNITY TO NETWORK WITH THOUGHT LEADERS IN THE AD TECH INDUSTRY",     
    //         "tabhoverimg":tabhoverimg1,        
    //         "tabcontentimg":tabcontentimg1        
    //     },
    //     {
    //         "id":2,
    //         "tabname":"tab2",
    //         "tabimg":tabimg2, 
    //         "tabheading":"Elevate your thought leadership through a high-quality video series, sponsored events, webinars, and awards",     
    //         "tabhoverimg":tabhoverimg2,        
    //         "tabcontentimg":tabcontentimg2       
    //     },
    //     {
    //         "id":3,
    //         "tabname":"tab3",
    //         "tabimg":tabimg3, 
    //         "tabheading":"Exclusive access to events such as roadshows and bootcamps",     
    //         "tabhoverimg":tabhoverimg3,        
    //         "tabcontentimg":tabcontentimg3        
    //     }

    // ]

    const data = props.data;





    return (
        <>

            <section className='hovertab-section' >
                <Container fluid className={props.class !== undefined ? `px-5p desktop ${props.class}` : "px-5p desktop"} >
                    <h3 className="heading">{props.title !== "" ? props.title : ""} </h3>
                    <Row className=''>

                        <Col className='col-md-6 left-side'>
                            <div className="hover-tabs tab">



                                {/* {data.map((d,i) => (    
                    
        
                        // <div className= {activeTab === d.tabname ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab(d.tabname)}}>
                        //     <div className="d-flex tab-box ">
                        //         <div className=" tabimg py-4">
                        //             {activeTab === d.tabname ? <img src={d.tabimg} alt="..." /> : <img src={d.tabhoverimg} alt="..." /> }
                        //         </div>
                        //         <div className="tab-text py-4 ms-5">
                        //             <h3 className='tab-heading'>{d.tabheading}</h3>
                        //         </div>
                        //     </div>
                        // </div>


                        <div className= {activeTab === "London" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab()}}>
                        <div className="d-flex tab-box ">
                            <div className=" tabimg py-4">
                                {activeTab === "London" ? <img src={tabhoverimg1} alt="..." /> : <img src={tabimg1} alt="..." /> }
                            </div>
                            <div className="tab-text py-4 ms-5">
                                <h3 className='tab-heading'>{d.tabheading}</h3>
                            </div>
                        </div>
                        </div>


                    
                    ))}       */}

                                {data.map((d) => {
                                    return (
                                        <>
                                            <div key={d.id} className={activeTab === d.tabname ? "tablinks active" : "tablinks"} onMouseOver={() => { setActiveTab(d.tabname) }}>
                                                <div className="d-flex tab-box ">
                                                    <div className=" tabimg py-4">
                                                        {activeTab === d.tabname ? <img src={d.tabhoverimg} alt="..." /> : <img src={d.tabimg} alt="..." />}
                                                    </div>
                                                    <div className="tab-text py-4 ms-5">
                                                        <h3 className='tab-heading pb-2'>{d.tabheading}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }

                                {/* <div className= {activeTab === "London" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('London')}}>
                            <div className="d-flex tab-box ">
                                <div className=" tabimg py-4">
                                    {activeTab === "London" ? <img src={tabhoverimg1} alt="..." /> : <img src={tabimg1} alt="..." /> }
                                </div>
                                <div className="tab-text py-4 ms-5">
                                    <h3 className='tab-heading'>OPPORTUNITY TO NETWORK WITH THOUGHT LEADERS IN THE AD TECH INDUSTRY</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className= {activeTab === "Paris" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('Paris')}}>
                            <div className="d-flex tab-box ">
                                 <div className=" tabimg py-4">
                                     {activeTab === "Paris" ? <img src={tabhoverimg2} alt="..." /> : <img src={tabimg2} alt="..." /> }
                                  </div>
                                  <div className="tab-text py-4 ms-5">
                                     <h3 className='tab-heading'>Elevate your thought leadership 
                                    through a high-quality video series,
                                    sponsored events, webinars, and awards</h3>
                                </div>
                            </div>
                        </div>
                    
                        <div className= {activeTab === "Tokyo" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('Tokyo')}}>
                            <div className="d-flex tab-box  ">
                                <div className=" tabimg py-4">
                                     {activeTab === "Tokyo" ? <img src={tabhoverimg3} alt="..." /> : <img src={tabimg3} alt="..." /> }
                                </div>
                                <div className="tab-text py-4 ms-5">
                                    <h3 className='tab-heading'>Exclusive access to events such as 
                                    roadshows and bootcamps</h3>
                                </div>
                            </div>
                        </div> */}
                            </div>

                        </Col>

                        <Col className='col-md-6 right-side'>


                            <div className='content-box'>
                                {/* 
                        {data.map((d,i) => (    
                            <div className={activeTab === d.tabname ? "tabcontent active" : "tabcontent"}>
                                <img src={d.tabcontentimg} alt="..." />
                            </div>  
                        
                        ))}  */}

                                {data.map((d) => {
                                    return (
                                        <>
                                            <div key={d.id} className={activeTab === d.tabname ? "tabcontent active" : "tabcontent"}>
                                                <img src={d.tabcontentimg} alt="..." />
                                            </div>
                                        </>
                                    )
                                })
                                }

                                {/* <div className={activeTab === "London" ? "tabcontent active" : "tabcontent"}>
                            <img src={tabcontentimg1} alt="..." />
                        </div>

                        <div  className={activeTab === "Paris" ? "tabcontent active" : "tabcontent"}>
                             <img src={tabcontentimg2} alt="..." />
                        </div>

                        <div  className={activeTab === "Tokyo" ? "tabcontent active" : "tabcontent"}>
                             <img src={tabcontentimg3} alt="..." />
                        </div>  */}
                            </div>
                        </Col>


                    </Row>

                    {/* {props.button !== undefined ? <img src={d.tabhoverimg} alt="..." /> : <img src={d.tabimg} alt="..." /> } */}

                    {props.button !== undefined ? <div className='text-center'><a href="apply-to-join"><button className="applynow-btn" >APPLY TO JOIN </button></a></div> : ""}

                </Container>

                {/* memberbenefits */}
                <Container fluid className={props.class === "memberbenefits" ? `px-5p mobile ${props.class}` : "px-5p d-none"} >
                    <h3 className="heading">{props.title !== "" ? props.title : ""} </h3>
                    <Row className=''>


                        {data.map((d) => {
                            return (
                                <>
                                    <Col className='col-md-12 mx-auto py-4'>
                                        <div className="mobile-view text-center">
                                           <div className='pb-4 borderbottom'>
                                           <img src={d.tabcontentimg} alt="..." />
                                            <h3 className='imgheading'>NETWORK WITH INDUSTRY PIONEERS</h3>
                                           </div>
                                        </div>
                                    </Col>
                                </>
                            )
                        })
                        }



                    </Row>

                    {/* {props.button !== undefined ? <img src={d.tabhoverimg} alt="..." /> : <img src={d.tabimg} alt="..." /> } */}

                    {props.button !== undefined ? <div className='text-center'><a href="apply-to-join"><button className="applynow-btn" >APPLY TO JOIN </button></a></div> : ""}

                </Container>

                {/* ex-memberbenefits */}
                <Container fluid className={props.class === "ex-memberbenefits" ? `px-5p mobile ${props.class}` : "px-5p d-none"} >
                    <h3 className="heading mobile-view-heading">{props.title !== "" ? props.title : ""} </h3>
                    <Row className=''>

                        <Col className='mx-auto left-side'>
                            <div className="hover-tabs tab">

                                {data.map((d) => {
                                    return (
                                        <>
                                            <div className="" >
                                                <div className="text-center">
                                                    <div className="tabimg py-4">
                                                        {activeTab === d.tabname ? <img src={d.tabhoverimg} alt="..." /> : <img src={d.tabhoverimg} alt="..." />}
                                                    </div>
                                                    <div className="tab-text py-4">
                                                        <h3 className='tab-heading'>{d.tabheading}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                                }


                            </div>

                        </Col>


                    </Row>


                    {props.button !== undefined ? <div className='text-center'><a href="apply-to-join"><button className="applynow-btn" >APPLY TO JOIN </button></a></div> : ""}

                </Container>



            </section>


            {/* <div>HoverTab</div>
            
        <div className="hover-tabs tab">
        <button className= {activeTab === "London" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('London')}}>London</button>
        <button className={activeTab === "Paris" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('Paris')}}>Paris</button>
        <button className={activeTab === "Tokyo" ? "tablinks active" : "tablinks"} onMouseOver={()=>{setActiveTab('Tokyo')}}>Tokyo</button>
        </div>

        <div id="London" className={activeTab === "London" ? "tabcontent active" : "tabcontent"}>
        <h3>London</h3>
        <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" className={activeTab === "Paris" ? "tabcontent active" : "tabcontent"}>
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" className={activeTab === "Tokyo" ? "tabcontent active" : "tabcontent"}>
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
        </div> */}
        </>

    )
}

export default HoverTab