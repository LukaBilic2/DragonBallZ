// import React from "react";
import styles from "./Background.module.css";
import DragonBallBackground from "../../images/dragonBallBackground.jpg";
import MainPage from "./MainPage/MainPage.jsx";

const Background = () => {
  return (
    <>
      <img className={styles.background} src={DragonBallBackground} alt="BackgroundImage" />
      <MainPage></MainPage>
    </>
  );
};

export default Background;
