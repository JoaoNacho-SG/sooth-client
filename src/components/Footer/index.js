import React from "react";
import { Button } from "../general/Button";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import style from "./footer.module.scss";
import { JoinSooth } from "../general/JoinSooth";

export const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <JoinSooth />
      <footer className={style.footer__container}>
        <section className={style.info__container}>
          <div>
            <h1>sooth</h1>
            <p>Explore our innovative skincare products</p>

            <div className={style.input__wrapper}>
              <input type="text" placeholder="Your email..."></input>
              <Button btnContent={"Subscribe"} btnClass={"secondary"} />
            </div>
          </div>

          <div className={style.lists__container}>
            <ul className={style.list__wrapper}>
              <h5>SHOP</h5>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Lorem ipsum al
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Dolar at
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Veraotio
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Chauloe
                </a>
              </li>
            </ul>
            <ul className={style.list__wrapper}>
              <h5>ABOUT</h5>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Sooth Stories - Blog
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Learn More
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Stores
                </a>
              </li>
            </ul>
            <ul className={style.list__wrapper}>
              <h5>MORE</h5>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Dolar at
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Lorem at al
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleClick(e)}>
                  Veraotio
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className={style.copyright__container}>
          <div>
            <p>SOOTH ALL RIGHTS RESERVED ©</p>
          </div>

          <div className={style.links__container}>
            <div className={style.links__wrapper}>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
            <div className={style.logos__wrapper}>
              <a href="#" onClick={(e) => handleClick(e)}>
                <MdFacebook />
              </a>
              <a href="#" onClick={(e) => handleClick(e)}>
                <AiOutlineInstagram />
              </a>
              <a href="#" onClick={(e) => handleClick(e)}>
                <BsTwitter />
              </a>
              <a href="#" onClick={(e) => handleClick(e)}>
                <TiSocialYoutubeCircular />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
