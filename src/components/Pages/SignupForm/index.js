import React, { useState } from "react";
import style from "./signupform.module.scss";
import { Button } from "../../general/Button";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className={style.form__container}>
          <h1>REGISTER</h1>
          <input
            type="text"
            required
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            required
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
