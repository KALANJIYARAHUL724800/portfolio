import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, data } from 'react-router-dom';
import HeaderComponents from './components/Headers/HeaderComponents';
import FooterComponents from './components/Footers/FooterComponets';
import HeroComponent from './components/HeroSection/HeroComponent';
import { useEffect, useState } from 'react';
import getHomeDetails from './components/HomeConnection';
import PageNotFound from './components/PageNotFound';
import AdminComponent from './components/AdminSection/AdminComponent';
import DashboardComponent from './components/AdminSection/DashboardComponent';

function App() {
  const [homeData, setHomeData] = useState(null); //home details

  useEffect(() => {
    getHomeDetails().then(data => {
      if (data.length > 0) {
        const parsed = JSON.parse(data[0].contents);
        setHomeData(parsed);
      }
    });
  }, [data]);

  return (
    <Router>
      <HeaderComponents />   {/* Header inside Router */}
      <Routes>
        <Route path="/" element={<HeroComponent data={homeData} page="home" />} />
        <Route path="/home" element={<HeroComponent data={homeData} page="home" />} />
        <Route path="/about" element={<HeroComponent data={homeData} page="about" />} />
        <Route path="/skills" element={<HeroComponent data={homeData} page="skill" />} />
        <Route path="/projects" element={<HeroComponent data={homeData} page="projects" />} />
        <Route path="/contact" element={<HeroComponent data={homeData} page="contact" />} />
        <Route path="/dashboard-admin" element={<DashboardComponent />} />
        <Route path="/admin" element={<AdminComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterComponents />
    </Router>

  );
}

export default App;
