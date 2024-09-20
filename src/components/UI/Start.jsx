import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/download.jpg";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
            <span className="highlights">THE HUB NUTRIMENT </span> has one motive, and that is to help you. 
            </h2>
            <p>
            The future of The Hub entails so much more than a lifestyle trainer. We are working
towards many different niches to help those have even more accessibility.
            </p>

            <button className="regist btnp">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
