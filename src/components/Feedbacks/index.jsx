import React, { useState } from "react";
import css from "./style.module.css";
import chel1 from "../../static/chel1.png";
import chel2 from "../../static/chel2.png";
import chel3 from "../../static/chel3.png";
import twitterIcon from "../../static/twitter_icon.svg";
import bg from "../../static/commentBackground.jpg";


const Feedbacks = () => {
  const [changeCommentClass, setChangeCommentClass] = useState(
    "comments__sectionNone"
  );
  const openComments = () => {
    if (changeCommentClass === "comments__section") {
      setChangeCommentClass("comments__sectionNone");
    } else {
      setChangeCommentClass("comments__section");
    }
  };
  return (
    <>
      <section className={css.section} style={{ backgroundImage: `url(${bg})` }}>
        <div className={css.container}>
        <div className={`${css[changeCommentClass]}`}>
          <div className={css.buttons__inner}>
            <button className={css.btn__close} onClick={openComments}>
              X
            </button>
            <button className={css.btn}>Read more testimonials</button>
          </div>
          <ul className={css.comments__list}>
            <li className={css.comments__item}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel1} alt="chel1" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Evan Lahti</h4>
                    <h5 className={css.profile__descr}>PC Gamer</h5>
                  </div>
                </div>
              </div>
              <p className={css.comment}>
                “One of my gaming highlights of the year.”
              </p>
              <h6 className={css.date}>October 18, 2018</h6>
            </li>
            <li className={css.comments__item}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel2} alt="chel2" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Jada Griffin</h4>
                    <h5 className={css.profile__descr}>Nerdreactor</h5>
                  </div>
                </div>
              </div>
              <p className={css.comment}>
                “The next big thing in the world of streaming and survival
                games.”
              </p>
              <h6 className={css.date}>December 21, 2018</h6>
            </li>
            <li className={css.comments__item}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel3} alt="chel3" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Aaron Williams </h4>
                    <h5 className={css.profile__descr}>Uproxx</h5>
                  </div>
                </div>
              </div>
              <p className={css.comment}>
                “Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is
                Ridiculous.”
              </p>
              <h6 className={css.date}>December 24, 2018</h6>
            </li>
          </ul>
        </div>
        <div className={css.about__inner}>
        <div className={css.about}>
          <h2 className={css.smallTitle}>What people think?</h2>
          <h1 className={css.title}>Press quotes</h1>
          <p className={css.description}>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
        </div>
        <div className={css.btn__inner}>
          <button className={css.btn__read} onClick={openComments}>
            Read some comments
          </button>
          <button className={`${css.btn} ${css.btnMain}`}>Read more testimonials</button>
        </div>
        </div>
        <ul className={`${css.comments__list} ${css.global__list}`}>
            <li className={css.comments__item}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel1} alt="" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Evan Lahti</h4>
                    <h5 className={css.profile__descr}>PC Gamer</h5>
                  </div>
                </div>
              </div>
              <p className={css.comment}>
                “One of my gaming highlights of the year.”
              </p>
              <h6 className={css.date}>October 18, 2018</h6>
            </li>
            <li className={`${css.comments__item} ${css.margin}`}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel2} alt="" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Jada Griffin</h4>
                    <h5 className={css.profile__descr}>Nerdreactor</h5>
                  </div>
                </div>
              </div>
              <p className={css.comment}>
                “The next big thing in the world of streaming and survival
                games.”
              </p>
              <h6 className={css.date}>December 21, 2018</h6>
            </li>
            <li className={css.comments__item}>
              <div className={css.profile__innerG}>
                <div className={css.profile__inner}>
                  <img src={chel3} alt="" className={css.profile__img} />
                  <div className={css.profile__infoInner}>
                    <h4 className={css.profile__name}>Aaron Williams </h4>
                    <h5 className={css.profile__descr}>Uproxx</h5>
                  </div>
                </div>
                <img src={twitterIcon} alt="" className={css.twitter} />
              </div>
              <p className={css.comment}>
                “Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is
                Ridiculous.”
              </p>
              <h6 className={css.date}>December 24, 2018</h6>
            </li>
          </ul>
          </div>
      </section>
    </>
  );
};

export default Feedbacks;
