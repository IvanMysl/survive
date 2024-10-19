import React from "react";
import css from "./style.module.css";
const Features = () => {
  return (
    <section className={css.features}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <div className={css.inner}>
            <p className={css.title__text}>What’s so special?</p>
            <h1 className={css.title}>FEATURES</h1>
            <ul className={css.list}>
              <li className={css.item}>
                <h2 className={css.mainTitle}>SURVIVE AT ALL COSTS</h2>
                <p className={css.item__text}>
                  You have 30 minutes to find a relic, signal for extraction,
                  and grab one of three spots on the rescue chopper.
                </p>
              </li>
              <li className={css.item}>
                <h2 className={css.aliens}>CREATE ALLIES & ENEMIES</h2>
              </li>
              <li className={css.item}>
                <h2 className={css.aliens}>IMPRESS THE AUDIENCE</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
