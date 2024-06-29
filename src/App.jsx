import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SearchProvider } from './components/SearchContext';

function App() {
  return (
    <>
    <SearchProvider>
      <Navbar />
     <div className='min-h-screen'>
     <Outlet />
     </div>
      <Footer/>
      </SearchProvider>
    </>
  );
}

export default App;
