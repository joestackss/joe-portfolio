import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>React</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* BACKEND DEV */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Mongodb</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>NPM</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details_icon" />
              <div>
                <h4>Express</h4>
                <small className="experience">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
