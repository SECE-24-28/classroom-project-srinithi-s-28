import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/functionalComponents/Navbar.jsx'
import Home from './components/functionalComponents/Home.jsx'
import About from './components/functionalComponents/About.jsx'
import LearningReact from './components/functionalComponents/LearningReact.jsx'
import Contact from './components/functionalComponents/contact.jsx'
import './css/App.css'
import ClassComponent from './components/ClassComponents/ClassComponent.jsx'
function App() {
  return (
    <header>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<div></div>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/learn-react" element={<LearningReact/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
        
    </header>
  );
}

export default App;
