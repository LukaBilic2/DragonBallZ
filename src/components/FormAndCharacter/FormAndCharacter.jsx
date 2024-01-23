import { useState } from 'react';
import styles from './FormAndCharacter.module.css';
import useCharacter from '../../hooks/UseCharacter.jsx';
import Form from '../Form/Form.jsx';
import GokuPopUp from '../../images/goku.avif';

const FormAndCharacter = () => {
  const apiUrl = 'https://dragonball-api.com/api/characters';
  const { characters, loading, showCharacters, setShowCharacters } = useCharacter(apiUrl);
  const [inputSearch, setInputSearch] = useState('');

  const handleButtonClick = () => {
    if (inputSearch.trim() !== '') {
      setShowCharacters(true);
    }
  };

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
    setShowCharacters(false);
  };
  const handleEnterKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleButtonClick();
    }
  };

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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.allCharacterDiv}>
          {showCharacters &&
            (filteredCharacters.length > 0 ? (
              filteredCharacters.map((character) => (
                <div className={styles.characterContainer} key={character.id}>
                  <img className={styles.gokuPop} src={GokuPopUp} alt="Goku" />
                  <img className={styles.imageStyle} src={character.image} alt="image" />
                  <h2>
                    Name: <p style={{ fontSize: changeFontSize(character) }}>{character.name}</p>
                  </h2>
                  <br />
                  <p>Race: {character.race}</p>
                  <p className={styles.powerLevel}></p>
                  <p>Power Level:</p>
                  <p>{character.maxKi}</p>
                </div>
              ))
            ) : (
              <p className={styles.noCharacterFound}>No characters found.</p>
            ))}
        </div>
      )}
    </div>
  );
};

export default FormAndCharacter;
