import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/undraw_breakfast_psiw.svg";
import workout from "../../assets/img/undraw_workout_gcgu.svg";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* ========== hero content ========== */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Are you tired of feeling dependent on medication 
              <span className="highlights"> and visiting the doctor 
</span> frequently?
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
            Imagine waking up and being able to shoot out of bed like we once did. No aches
or hurting, full of energy and motivation.<br/> Taking it a step further, you then open
that screen to see your lifestyle coach has given you options for a workout, what
to eat, and is waiting to hear any questions. <br/>
From the past of wasting countless hours wondering what to eat, shop for, or what
to do at the gym, someone is there to do it all for you – giving you more time to
enjoy the gift of life.
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started</button>
              {/* <button className="watch__btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button> */}
            </div>
          </div>

          {/* ========= hero img ============= */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div
                className="gym__location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <img src={workout} alt=""  />
                </span>
              </div>

              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
