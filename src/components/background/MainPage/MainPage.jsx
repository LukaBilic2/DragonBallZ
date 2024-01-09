// import React from 'react'
import styles from "./MainPage.module.css";
import FormAndCharacter from './API/FormAndCharacter';

const MainScreen = () => {
  return (
    <div className={styles.sredina}>
      <FormAndCharacter></FormAndCharacter>
    </div>
  );
};

export default MainScreen;
