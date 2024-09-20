import React from "react";
import "../../styles/pricing.css";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
          <span className="highlights">Membership </span> Plan
          </h2>
          <p>
          Discover the Benefits of our Lifestyle Membership with confidence: Try it free for 30Days, and if you're Not Satisfied, it's on us! 
          </p>
        </div>

        {/* ========== pricing wrapper =========== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Empowering your Best Life Transform with The Hub!</h2>
              {/* <h2 className="pricing section__title">
                $70 <span>/month</span>
              </h2> */}
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Access to experienced and qualified lifestyle coaches who will work with the
customers to understand their unique needs and create a customized plan
to address them.
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Regular follow-ups and progress tracking to ensure that the customers are
seeing results and making progress towards their goals.
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  A supportive community of like-minded individuals who are also working
towards improving their health and well-being.
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  A variety of resources, such as exercise plans, nutrition guides, and stress
management techniques, to help the customers make sustainable lifestyle
change
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Access to the latest research and information in the field of health and
wellness.
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Convenience and flexibility, with the option to participate in virtual coaching
sessions from the comfort of their own home.
                </li>
              </ul>

              <button className="regist memp"><Link to="/Signup">Join Now</Link></button>
            </div>
          </div>

          
       
        </div>
      </div>
    </section>
  );
};

export default Pricing;
