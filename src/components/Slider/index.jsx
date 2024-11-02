import React from "react";
import css from "./style.module.css";
import Rightslider from "./Rightslider";

const Slider = () => {
  return (
    <section className={css.section}>
      <div className={"container"}>
        <div className={css.wrapper}>
          <div className={css.text__div}>
            <p className={css.sos}>What is SOS?</p>
            <h2 className={css.title}>social battle royale game</h2>
            <p className={css.text}>
              Each round, you and 15 other contestants compete to escape a
              deadly island filled with monsters. The trick is: three people can
              survive. Will you run solo or form friendships with others to
              escape? Making the right decisions could be the difference between
              life and death.
            </p>
          </div>
          <Rightslider />
        </div>
      </div>
    </section>
  );
};

export default Slider;
