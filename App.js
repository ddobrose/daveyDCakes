import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/pages/Home';
import { Order } from './components/pages/Order';



function App() {
  return (
    <>
    <header>
    <Navbar/>
    </header>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/order' element={<Order/>}/>
    
    

    </Routes>


      
      
      <footer className='fixed-bottm'>
        <Footer/>
        </footer>
      
    </>
  );
}

export default App;
