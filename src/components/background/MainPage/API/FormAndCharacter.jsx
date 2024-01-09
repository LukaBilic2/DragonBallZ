import { useState } from 'react';
import styles from './FormAndCharacter.module.css';
import useCharacter from './ApiUseCharacter.jsx';
import Form from '../MainPageForm/Form.jsx';

const FormAndCharacter = () => {
  const apiUrl = 'https://dragonball-api.com/api/characters';
  const { characters, loading, showCharacters, setShowCharacters } = useCharacter(apiUrl);
  const [inputSearch, setInputSearch] = useState('');

  // Function to handle button click event
  const handleButtonClick = () => {
    // Check if the input is not empty before showing characters
    if (inputSearch.trim() !== '') {
      setShowCharacters(true);
    }
  };

  // Function to handle input change event
  const handleInputChange = (event) => {
    // Update input search and clear displayed characters when the input is changed
    setInputSearch(event.target.value);
    setShowCharacters(false);
  };

  // Function to handle Enter key press event
  const handleEnterKeyDown = (event) => {
    // Trigger button click when the Enter key is pressed
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

  // Filter characters based on the input search
  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  const changeFontSize = (characters) => {
    return characters.name.length > 10 ? '35px' : '45px';
  };

  return (
    <div className={styles.mainParentDiv}>
      <Form
        onButtonClick={handleButtonClick}
        onInputChange={handleInputChange}
        onEnterKeyDown={handleEnterKeyDown}
        inputSearch={inputSearch}
      />
      {/* Display loading message or characters based on conditions */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.mainCharacterDiv}>
          {showCharacters &&
            (filteredCharacters.length > 0 ? (
              // Display filtered characters
              filteredCharacters.map((character) => (
                <div className={styles.characterContainer} key={character.id}>
                  <img className={styles.imageStyle} src={character.image} alt="" />
                  <h2>
                    Name: <p style={{ fontSize: changeFontSize(character) }}>{character.name}</p>
                  </h2>
                  <br />
                  <p>Race: {character.race}</p>
                  <p className={styles.powerLevel}>
                    Power Level: <div>{character.maxKi}</div>
                  </p>
                </div>
              ))
            ) : (
              // Display message when no characters are found
              <p>No characters found.</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default FormAndCharacter;
