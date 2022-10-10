import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Objective from './components/About/Ourobjectives';
import Scope from './components/About/Scope';
import Stakeholders from './components/About/Stakeholders';
import Principles from './components/About/Principles';


import Invasive from './components/Invasive';

import Ecoimpacts from './components/Invasive/Ecoimpacts';
import Eimpacts from './components/Invasive/Eimpacts';
import Ipathogens from './components/Invasive/Ipathogens';
import Iplants from './components/Invasive/Iplants';
import Pthreat from './components/Invasive/Pthreat';
import Invanimals from './components/Invasive/Invanimals';
import Socialimpacts from './components/Invasive/Socialimpacts';

import ActionPlan from './components/ActionPlan';

import Fundprioriti from './components/ActionPlan/Fundprioriti';
import Monitorroport from './components/ActionPlan/Monitorroport';
import Additional from './components/ActionPlan/Additional';

function Wrapper() {
  return (
    <>
         <Header />  

            <Routes basename="/">
                <Route path="/" element={<Home />} />  
                <Route path="/about" element={<About />}/>
                <Route path="/acronyms" element={<Additional />}/>

                  {/* All path of about page and sub page */}

                <Route path="/about/objective" element={<Objective />}/>
                <Route path="/about/scope" element={<Scope />}/>
                <Route path="/about/stakeholders" element={<Stakeholders />}/>
                <Route path="/about/principles" element={<Principles />}/>


                {/* All path of Invasive Species in Antigua and Barbuda page and sub page */}

                <Route path="/invasive" element={<Invasive />}/>
                <Route path="/invasive/iplants" element={<Iplants />}/>
                <Route path="/invasive/invanimals" element={<Invanimals />}/>
                <Route path="/invasive/ipathogens" element={<Ipathogens />}/>
                <Route path="/invasive/pthreat" element={<Pthreat />}/>
                <Route path="/invasive/eimpacts" element={<Eimpacts />}/>
                <Route path="/invasive/ecoimpacts" element={<Ecoimpacts />}/>
                <Route path="/invasive/socimpacts" element={<Socialimpacts />}/>


                 {/* All path of The Action Plan page and sub page */}

                 <Route path="/actionplan" element={<ActionPlan />}/>
                 <Route path="/actionplan/fundpriorities" element={<Fundprioriti />}/>
                 <Route path="/actionplan/monitorroport" element={<Monitorroport />}/>

                 
                 <Route path="*" element={<Error />}/>
            </Routes> 


          <Footer />
     
    
    </>
    
    
      
  );
}

export default Wrapper;
