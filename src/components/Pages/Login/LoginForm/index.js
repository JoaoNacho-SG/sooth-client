import React from "react";
import { Button } from "../../../general/Button";
import style from "./loginform.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helper, setHelper] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className={style.form__container}>
          <h1>LOGIN</h1>
          <input
            type="email"
            required
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={style.input__password}>
            <input
              type={!passVisible ? "password" : "text"}
              required
              title="minimum 8 characters, 1 uppercase, 1 lowercase, 1 number"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className={style.input__visibility}
              onClick={() => setPassVisible(!passVisible)}
            >
              {!passVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
          </div>

          <p className={style.helper} onClick={() => setHelper(!helper)}>
            <span>Need help?</span>
          </p>

          <ul
            className={
              helper ? style.helper__text_active : style.helper__text_inactive
            }
          >
            <p>Password must have at least:</p>
            <li>
              <p>8 characters;</p>
            </li>
            <li>
              <p>1 uppercase;</p>
            </li>
            <li>
              <p>1 lowercase;</p>
            </li>
            <li>
              <p>1 number.</p>
            </li>
          </ul>

          <Button btnContent={"Continue"} btnClass={"login"} type="submit" />
          <p>
            <span>Forgot your password?</span>
            <br /> Don’t have an account?
            <span>
              <Link className="link" to={"/signup"}>
                Register now.
              </Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
