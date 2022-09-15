import React, { useState } from "react";
import style from "./signupform.module.scss";
import { Button } from "../../general/Button";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export const SignupForm = () => {
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
          <h1>REGISTER</h1>

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
              title="Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
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

          <Button
            btnContent={"Create Account"}
            btnClass={"login"}
            type="submit"
          />
          <p>
            Already have an account?
            <span>
              <Link className="link" to={"/login"}>
                Sign in here.
              </Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
