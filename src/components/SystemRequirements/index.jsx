import React from 'react';
import css from "./style.module.css";
import bg4 from "../../static/bgimage4.jpg";

const SystemRequirements = () => {
  return (
    <section className={css.section} style={{ backgroundImage: `url(${bg4})` }}>
      <div>
        <h3 className={css.title}>CAN MY COMPUTER RUN THIS GAME?</h3>
        <h2 className={css.subtitle}>SYSTEM REQUIREMENTS</h2>
      </div>
      <div className={css.requirements}>
        <ul className={css.systemitems}>
          <li className={css.items}><span className={css.label}>OS:</span><p>
            Windows 7 64-bit only
            (No OSX support at this time) </p></li>
          <li className={css.items}><span className={css.label}>Processor:</span>
            <p>Intel Core 2 Duo @ 2.4 GHZor AMD Athlon X2 @ 2.8 GHZ
            </p></li>
          <li className={css.items}><span className={css.label}>Memory:</span><p>
            8GB RAM
          </p></li>
          <li className={css.items}><span className={css.label}>Storage:</span><p>
            8GB available space</p></li>
          <li className={css.items}><span className={css.label}>Graphics:</span><p>
            NVIDIA GeForce GTX 660 2GB or
            AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
          </p></li>
        </ul>
      </div>
    </section >
  );
};

export default SystemRequirements;