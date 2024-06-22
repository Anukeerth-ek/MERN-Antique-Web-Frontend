// loaders/artworksLoader.js

import { json } from 'react-router-dom';

export const fetchAntiqueByCategory = async ({ params }) => {
  try {
    const response = await fetch(`http://localhost:5000/all-arts/${params.category}`);
  
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return json(data);
  } 
  catch (error) {
    console.error('Error fetching artworks by category:', error);
    throw error; // Re-throw the error so it gets caught by the error boundary
  }
};
