import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
