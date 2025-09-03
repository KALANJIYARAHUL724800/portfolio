import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom';
import HeaderComponents from './components/Headers/HeaderComponents';
import FooterComponents from './components/Footers/FooterComponets';
import HeroComponent from './components/HeroSection/HeroComponent';
import AboutComponent from './components/AboutSection/AboutComponent';
import ProjectComponents from './components/ProjectSection/ProjectComponents';
import SkillsComponent from './components/SkillsSection/SkillsComponent';
import ContactComponent from './components/ContactSection/ContactComponet';
import { useEffect, useState } from 'react';
import getHomeDetails from './components/HomeConnection';

function App() {
  const [homeData, setHomeData] = useState(null); //home details

  useEffect(() => {
    getHomeDetails().then(data => {
      setHomeData(data);
    });
  }, []);

  return (
    <Router>
      <HeaderComponents />   {/* Header inside Router */}
      <Routes>
        <Route path="/" element={<HeroComponent data={homeData}/>} />
        <Route path="/home" element={<HeroComponent data={homeData}/>} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/projects" element={<ProjectComponents />} />
        <Route path="/skills" element={<SkillsComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
      <FooterComponents />
    </Router>
  );
}

export default App;
