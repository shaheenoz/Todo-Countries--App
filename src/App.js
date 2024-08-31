import { useState } from 'react';
import './App.css';
import Countries from './Comp/Pages/CountryPage/Countries';
import Todo from './Comp/Pages/Todo/Todo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Comp/Common/Navbar';
import Footer from './Comp/Common/Footer';
import Home from './Comp/Pages/Home/Home';
import Notfound from './Comp/Pages/Notfound/Notfound';

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">

      
     <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/countries' element={<Countries/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<Notfound/>}/>
      
    </Routes>
    <Footer/>

    </BrowserRouter>
    
     
    
    </div>

        //  {boxtype==='Todo' ? <Countries showCountry={show}/> : <Todo showTodo={show}/> }
  );
}

export default App;
