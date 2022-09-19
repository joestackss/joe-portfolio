import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>

        {/* WEB DEVLOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Front End Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>

        {/* FRONT END DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Animation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem Ipsum dolor sit amet consectetur elit</p>
            </li>
          </ul>
        </article>

        {/* UI/UX */}
      </div>
    </section>
  );
};

export default Services;
