import css from "./style.module.css";
import React, { useState } from "react";
import bg from "../../static/bgimage1.jpg";
import logo from "../../static/logo-sos.svg";


// menu__btn.addEventListener("click", () => {
//   menuBtn.classList.toggle("active");
//   list.classList.toggle("active");
// });


const Hero = () => {

  const [show,setShow]=useState(false)
  const menuHandler =()=>{
    setShow(!show)
    console.log(show);
  }
  return (
    <section className={css.section} style={{ backgroundImage: url(${bg}) }}>
      <div className={css.hero}>
      <button onClick={()=>menuHandler()} className={show ? css.menu__btn + " " + css.active:css.menu__btn}>
        <span className={css.bar}></span>
        <span className={css.bar}></span>
        <span className={css.bar}></span>
      </button>
        <img className={css.logo} alt={"image"} src={logo} />
        <ul className={show ? css.list + " " + css.active:css.list}>
          <li className={css.item}> Main</li>
          <li className={css.item}> About</li>
          <li className={css.item}> Game features</li>
          <li className={css.item}> System requirements</li>
          <li className={css.item}> Quotes</li>
        </ul>

      </div>
      
      <div className={css.main}>
        <h1 className={css.title}>SURVIVE AT ALL COSTS</h1>
        <p className={css.text}>Experience new social battle royale game</p>
        <button className={css.btn}> Buy Now on Steam $14.88</button>
      </div>
      <div className={css.story}>
        <p className={css.story__text}>The story</p>
      </div>
    </section>
  );
};

export default Hero;