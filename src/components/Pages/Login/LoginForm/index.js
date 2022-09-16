import React, { useEffect } from "react";
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
  const [error, setError] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [userInSession, setUserInSession] = useState({});

  const navigate = useNavigate();

  //Login util
  const login = async (userAuth, userEmail, userPassword) => {
    try {
      await signInWithEmailAndPassword(userAuth, userEmail, userPassword);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  //Grab user info and save it in state
  useEffect(() => {
    (async () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUserInSession(currentUser);
      });
    })();
  }, []);

  //Login after submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validate user inputs
    if (email === "" || password === "") {
      return setError("Please fill both fields");
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      return setError("Invalid email address");
    }

    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ===
      false
    ) {
      return setError(
        "Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
      );
    }
    //If all input matches criteria, login
    setEmail("");
    setPassword("");
    await login(auth, email, password);
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
            // required
            // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={style.input__password}>
            <input
              type={!passVisible ? "password" : "text"}
              // required
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
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

          {error && <p className={style.error__text}>{error}</p>}

          {!email.length && !password.length ? (
            <Button
              btnContent={"Continue"}
              btnClass={"disabled"}
              type="submit"
            />
          ) : (
            <Button btnContent={"Continue"} btnClass={"login"} type="submit" />
          )}

          <p className={style.register__text}>
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
