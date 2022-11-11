import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (

      <BrowserRouter sx={{
        minHeight: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }} >
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}
