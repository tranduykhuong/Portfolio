import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Extracurricular from './pages/Extracurricular/Extracurricular';
import Projects from './pages/Projects/Projects';
import Self from './pages/Self/Self';
import Skills from './pages/Skills/Skills';
import ToggleTheme, { setDarkTheme } from './Theme/ToggleTheme'

function App() {
  return (
    <div>
      <div className="app">
        <div className='toggleTheme'><ToggleTheme /></div>

        <div className="five-pointed-star"></div>
        <div className='square'></div>
        <div className='circle'></div>

        <ul id='nevar'>
          <li className='copos c1'>❄</li>
          <li className='copos c2'>❉</li>
          <li className='copos c3'>❋</li>
          <li className='copos c4'>❅</li>
          <li className='copos c5'>❋</li>
          <li className='copos c6'>❅</li>
          <li className='copos c7'>❉</li>
          <li className='copos c8'>❄</li>
        </ul>


        <div className='app-content'>
          <Routes>
            <Route path="/" element={<Layout><Self /></Layout>} />
            <Route path="/education" element={<Layout><Self /></Layout>} />
            <Route path="/skills" element={<Layout><Skills /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/extracurricular" element={<Layout><Extracurricular /></Layout>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
