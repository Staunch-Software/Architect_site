import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Designprocess from './components/Designprocess';

// Import Main Components
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio';
import CursorGlow from './components/CursorGlow';
// Import Specific Project Files
import Wellness from './components/wellness';
import LeafLifeHub from './components/Leaf';
import CascadiaWebsite from './components/Cascadia';
import Echo from './components/Echo';
import ConcreteBench from './components/Concrete';

function App() {
  return (
    <BrowserRouter>
    <CursorGlow />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          {/* Main Portfolio Grid */}
          <Route path="projects" element={<Portfolio />} />
          
          {/* Individual Project Routes mapped by ID */}
          <Route path="projects/1" element={<Wellness />} />
          <Route path="projects/2" element={<LeafLifeHub />} />
          <Route path="projects/3" element={<CascadiaWebsite />} />
          <Route path="projects/4" element={<Echo />} />
          <Route path="projects/5" element={<ConcreteBench />} />

          <Route path="designprocess" element={<Designprocess />} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;