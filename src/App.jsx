import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Bookings from './components/Bookings/Bookings';
import Footer from './components/Footer/Footer';
import Product from './Pages/Product';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Signup />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
