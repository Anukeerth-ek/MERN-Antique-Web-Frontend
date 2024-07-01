import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SearchProvider } from './contexts/SearchContext';
import { WishlistProvider } from './contexts/WishlistContext';

function App() {
  return (
    <>
    <SearchProvider>
      <WishlistProvider>
      <Navbar />
     <div className='min-h-screen'>
     <Outlet />
     </div>
      <Footer/>
      </WishlistProvider>
      </SearchProvider>
    </>
  );
}

export default App;
