import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>

  );
}

export default App;
