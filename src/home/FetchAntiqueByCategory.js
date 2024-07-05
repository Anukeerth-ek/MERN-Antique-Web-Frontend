// loaders/artworksLoader.js

import { json } from 'react-router-dom';

export const fetchAntiqueByCategory = async ({ params }) => {

  try {
    const response = await fetch(`https://antique-web.onrender.com/all-arts/${params.category}`);
  
    if (!response.ok) {
      alert("item does not exist")
      console.error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error fetching artworks by category:', error);
    throw error; // Re-throw the error so it gets caught by the error boundary
  }
};
