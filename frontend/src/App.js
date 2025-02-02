
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BMICalculate from './pages/BMICalculate';
import Contact from './pages/Contact';
import OurServices from './pages/OurServices';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar /> {/* Navbar is included globally here */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bmiCalculate' element={<BMICalculate />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/ourService' element={<OurServices />} />
        </Routes>
        <Footer/>
      </div>
      <ToastContainer theme='dark' position='top-center'/>

    </BrowserRouter>
  );
}

export default App;
