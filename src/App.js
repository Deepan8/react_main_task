import './App.css';
import Content from './components/dashboard/landindpage';
import Drug from '../src/components/dashboard/drug/drug'
import Pharmacies from './components/dashboard/pharmacies/pharmacies';
// import PharmacyNames from './components/dashboard/pharmacies/PharmacyName';
// import About from './components/dashboard/pharmacies/Aboutpharmacy';

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    
    <Routes>
    <Route path="" element={<Content />} />
        <Route path="/Drug" element={<Drug />}/> 
        <Route path="/Pharmacies" element={<Pharmacies />}/> 
      
        {/* <Route path="/PharmacyNames" element={<PharmacyNames />}/> 
        <Route path="/about" element={<About />}/>  */}
        

      </Routes>
      </>
  );
}

export default App;
