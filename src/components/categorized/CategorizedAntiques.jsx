import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtCard from '../ArtCard';

const CategorizedAntiques = () => {
  const artworks = useLoaderData();
  console.log(artworks);
  
  return (
    <div className='mt-4'>
      
      <ArtCard arts={artworks} headline={"Categorized Antiques"}/>
    </div>
  );
};

export default CategorizedAntiques;
