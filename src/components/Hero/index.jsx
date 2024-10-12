import React, { useState } from "react";
import css from "./style.module.css";
import logo from "../../static/logo.svg";
import bg from "../../static/main_screen.jpg";
import scrollDown from "../../static/scrollDown.svg";
import xboxIcon from "../../static/xboxIcon.svg";
import steamIcon from "../../static/steamIcon.svg";
import languageArrow from "../../static/languageArrow.svg";
import langugeLine from "../../static/langugeLine.svg";

const Hero = () => {
  const [changeArrowClass, setChangeArrowClass] = useState("languageArrow");
  const [changeLanguageClass, setChangeLanguageClass] = useState(
    "languagesChangeNone"
  );

  const languageChange = () => {
    if (changeArrowClass === "languageArrow") {
      setChangeArrowClass("languageArrow2");
    } else {
      setChangeArrowClass("languageArrow");
    }
  };
  const openLanguageMenu = () => {
    if (changeLanguageClass === "languagesChangeNone") {
      setChangeLanguageClass("languagesChange");
    } else {
      setChangeLanguageClass("languagesChangeNone");
    }
  };
  const [show, setShow] = useState(false);
  const menuHandler = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <section style={{ backgroundImage: `url(${bg})` }} className={css.section}>
      <button
        onClick={() => menuHandler()}
        className={show ? css.menu__btn + " " + css.active : css.menu__btn}
      >
        <span className={css.bar}></span>
        <span className={css.bar}></span>
        <span className={css.bar}></span>
      </button>
      <div className={css.hero}>
        <img className={css.logo} src={logo} alt="logo" />
        <ul className={show ? css.list + " " + css.active:css.list}>
          <li className={css.item}> Main</li>
          <li className={css.item}> About</li>
          <li className={css.item}> Game features</li>
          <li className={css.item}> System requirements</li>
          <li className={css.item}> Quotes</li>
        </ul>
        <div className={css.logosInner}>
          <div className={css.langugageInner}>
            <h1
              className={css.language}
              onClick={() => {
                languageChange();
                openLanguageMenu();
              }}
            >
              ENG
            </h1>
            <div className={`${css[changeArrowClass]}`}></div>
          </div>
          <img
            src={langugeLine}
            alt="langugeLine"
            className={css.langugeLine}
          />
          <img src={xboxIcon} alt="icon" className={css.icon} />
          <img src={steamIcon} alt="icon" className={css.icon} />
        </div>
      </div>
      <div className={`${css[changeLanguageClass]}`}>
        <button className={css.smallButton} onClick={openLanguageMenu}>
          RUS
        </button>
        <button className={css.smallButton} onClick={openLanguageMenu}>
          FRA
        </button>
        <button className={css.smallButton} onClick={openLanguageMenu}>
          DEU
        </button>
      </div>
      <div className={css.main}>
        <h1 className={css.title}>SURVIVE AT ALL COSTS</h1>
        <p className={css.text}>Experience new social battle royale game</p>
        <button className={css.btn}>Buy Now on Steam / $14.88</button>
      </div>
      <div className={css.footer}>
        <p className={css.footertext}>The story</p>
        <img src={scrollDown} alt="scrollDown" className={css.scrollDown} />
      </div>
    </section>
  );
};

export default Hero;
