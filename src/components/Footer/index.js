import React from "react";
import { Button } from "../general/Button";
import { MdFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import style from "./footer.module.scss";
import { JoinSooth } from "../general/JoinSooth";

export const Footer = () => {
  return (
    <>
      <JoinSooth />
      <footer className={style.footer__container}>
        <section className={style.info__container}>
          <div>
            <h1>sooth</h1>
            <p>Explore our innovative skincare products</p>

            <div className={style.input__wrapper}>
              <input type="text" placeholder="Your email..." />
              <Button btnContent={"Subscribe"} btnClass={"secondary"} />
            </div>
          </div>

          <div className={style.lists__container}>
            <ul className={style.list__wrapper}>
              <h5>SHOP</h5>
              <li>
                <a href="#">Lorem ipsum al</a>
              </li>
              <li>
                <a href="#">Dolar at</a>
              </li>
              <li>
                <a href="#">Veraotio</a>
              </li>
              <li>
                <a href="#">Chauloe</a>
              </li>
            </ul>
            <ul className={style.list__wrapper}>
              <h5>ABOUT</h5>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Sooth Stories - Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Learn More</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
            </ul>
            <ul className={style.list__wrapper}>
              <h5>MORE</h5>
              <li>
                <a href="#">Dolar at</a>
              </li>
              <li>
                <a href="#">Lorem at al</a>
              </li>
              <li>
                <a href="#">Veraotio</a>
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
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms of Use</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
            </div>
            <div className={style.logos__wrapper}>
              <a href="#">
                <MdFacebook />
              </a>
              <a href="#">
                <AiOutlineInstagram />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <TiSocialYoutubeCircular />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
