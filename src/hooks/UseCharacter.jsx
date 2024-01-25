import { useState, useEffect } from 'react';

const useCharacter = (apiUrl, initialCharacters) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCharacters, setShowCharacters] = useState(initialCharacters ? true : false);

  useEffect(() => {
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

    fetchCharacters();
  }, [apiUrl]);

  return {
    characters,
    loading,
    showCharacters,
    setCharacters,
    setLoading,
    setShowCharacters,
  };
};

export default useCharacter;
