
import './App.css';
import './FontFamily.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import AllRoutes from './Components/AllRoutes';



function App() {
  const [load,setloading] = useState(true)
  useEffect(()=>{
    const timer=  setTimeout(()=>{
      setloading(false)
    },3000);
    return () => clearTimeout(timer);
  },[])


  return  load ?(
    <section>
    <div className="loading loading05">
      <span>A</span>
      <span>E</span>
      <span>R</span>
      <span>O</span>
      <span>P</span>
      <span>O</span>
      <span>S</span>
      <span>T</span>
      <span>A</span>
      <span>L</span>
      <span>E</span>
    </div>
</section>
  ):
  (
    <>
     <Navigation/>
     <AllRoutes/> 
     <Footer/>
    </>
  )
}

export default App;
 