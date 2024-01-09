import { useState, useEffect } from "react";

// Custom hook for managing API data
const useCharacter = (apiUrl) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCharacters, setShowCharacters] = useState(false);

  // Effect to fetch characters when the showCharacters state changes or the API URL changes
  useEffect(() => {
    // Function to fetch characters data from the API and handle pagination
    const fetchCharacters = async (page = 1) => {
      setLoading(true);

      try {
        // Make a GET request to the specified API endpoint with pagination parameters
        const apicall = await fetch(`${apiUrl}?page=${page}&limit=58`);
        const data = await apicall.json();
        // Update the characters state with the received data
        setCharacters(data.items);
        // Set loading state to false after successfully fetching data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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
