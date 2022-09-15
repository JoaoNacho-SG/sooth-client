import React from "react";
import { Button } from "../../../general/Button";
import style from "./loginform.module.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./../../../../utils/firebase-config";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helper, setHelper] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [userInSession, setUserInSession] = useState({});

  // const navigate = useNavigate();

  //Login util
  const login = async (userAuth, userEmail, userPassword) => {
    try {
      await signInWithEmailAndPassword(userAuth, userEmail, userPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUserInSession(currentUser);
  });

  //Login after submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    await login(auth, email, password);
    // navigate("/");
  };

  //Signout util
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <section>
      {userInSession && (
        <div style={{ textAlign: "center" }}>
          <h1>Hello {userInSession?.email}</h1>
          <button onClick={logout}>Sign out</button>
        </div>
      )}
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
