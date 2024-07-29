import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ArtCard from '../../components/ArtCard';

const CategorizedAntiques = () => {
  const artworks = useLoaderData();
const headline = artworks[0].categories.toString()
  
  return (
    <div className='mt-4 '>
      
      <ArtCard arts={artworks} headline={headline}/>
    </div>
  );
};

export default CategorizedAntiques;
