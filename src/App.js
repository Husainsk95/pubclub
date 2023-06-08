import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Gotham-Bold.otf';
import './App.css';

// import ReactDOM from 'react-dom';  
//import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Routes , Route } from "react-router-dom";
//import { createBrowserHistory } from 'history';
// import Menu from './component/Menu';
// import Header from './component/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Members from './pages/Members';


// import Header from './component/Header';
// import Vision from './component/Vision';
// import HoverTab from './component/HoverTab';
// import Meet from './component/Meet';
import Menu from './component/Menu';
import Footer from './component/Footer';
import MemberBenefits from './pages/MemberBenefits';
import AdvisoryCouncil from './pages/AdvisoryCouncil';
import About from './pages/About';
import PubclubBenefit from './pages/PubclubBenefit';

function App() {


//   const history = createBrowserHistory({
//     basename: "/staging/pubclub"
// });

  return (


    <div className="App">
    
    {/* <BrowserRouter basename={"/staging/pubclub"}> */}
    {/* <BrowserRouter history={history} basename={"/staging/pubclub"} >  */}
      <Menu />
      <Routes>
        {/* <Route path="/" element={<Menu />}> */}
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={ <Home /> } exact />
          <Route path="about" element={ <About />} exact  />
          <Route path="members" element={ <Members />} exact  />
          <Route path="memberbenefits" element={ <MemberBenefits />} exact  />
          <Route path="single" element={ <PubclubBenefit />} exact  /> 

          <Route path="advisorycounciling" element={ <AdvisoryCouncil />} exact  />
          
          <Route path="applytojoin" element={ <Contact />} exact  />
          {/* <Route path="*" element={<>Members</>} /> */}
        {/* </Route> */}
        
      </Routes>
      <Footer />     
 
    {/* </BrowserRouter> */}

      {/* <Router>
        <Routes>
           <Route index element={    
            <header className='header-home '  > 
            <Container fluid className='hero px-5'>
              <Menu />
              <Header />
            </Container>
            </header>   

          } />
            <Route exact path='/staging/pubclub/' element={< Home />}></Route>
           <Route exact path='/staging/pubclub/members' element={<Members />}></Route>
           <Route exact path='/staging/pubclub/apply-to-join' element={<Contact />}></Route>
           <Route exact path='/staging/pubclub/contact' element={<h1> Contact </h1>}></Route>
        </Routes>
       </Router> */}

    </div>
   
  );
}

export default App;
