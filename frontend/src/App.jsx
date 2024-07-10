
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Visuals from './pages/Visuals';
import Program from './pages/Program';
import ChatAI from './pages/Chat';
import ContactUs from './pages/Contact';
import Donate from './pages/Donate';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/visuals" element={<Visuals/>} />
          <Route path="/program" element={<Program/>} />
          <Route path="/chat" element={<ChatAI/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/donate" element={<Donate/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
