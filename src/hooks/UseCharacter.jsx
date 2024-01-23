import { useState, useEffect } from 'react';

const useCharacter = (apiUrl) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);

  useEffect(() => {
    // Function to fetch characters data from the API and handle pagination
    const fetchCharacters = async (page = 1) => {
      setLoading(true);

      try {
        const apicall = await fetch(`${apiUrl}?page=${page}&limit=58`);
        const data = await apicall.json();
        setCharacters(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    // Trigger the fetchCharacters function when showCharacters state changes or the API URL changes
    if (showCharacters) {
      fetchCharacters();
    }
  }, [showCharacters, apiUrl]);

  return { characters, loading, showCharacters, setCharacters, setLoading, setShowCharacters };
};

export default useCharacter;
