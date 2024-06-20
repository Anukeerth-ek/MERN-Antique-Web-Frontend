import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategorizedAntiques = () => {
  const artworks = useLoaderData();

  return (
    <div>
      <h1>Categorized Antiques</h1>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork._id}>
            <img src={artwork.image} alt={artwork.title} className="rounded object-cover h-110 w-110" />
            <h2>{artwork.title}</h2>
            <p>{artwork.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorizedAntiques;
