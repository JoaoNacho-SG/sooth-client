import React from "react";
import { Button } from "../general/Button";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import style from "./footer.module.scss";

export const Footer = () => {
  return (
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
            <li>Lorem ipsum al</li>
            <li>Dolar at</li>
            <li>Veraotio</li>
            <li>Chauloe</li>
          </ul>
          <ul className={style.list__wrapper}>
            <h5>ABOUT</h5>
            <li>About Us</li>
            <li>Sooth Stories - Blog</li>
            <li>Contact Us</li>
            <li>Learn More</li>
            <li>Stores</li>
          </ul>
          <ul className={style.list__wrapper}>
            <h5>MORE</h5>
            <li>Dolar at</li>
            <li>Lorem at al</li>
            <li>Veraotio</li>
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
            <MdFacebook />
            <AiOutlineInstagram />
            <BsTwitter />
            <TiSocialYoutubeCircular />
          </div>
        </div>
      </section>
    </footer>
  );
};
