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
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [error, setError] = useState("");
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
      return;
      // setError("Please fill both fields");
    }

    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === false &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ===
        false
    ) {
      setEmailError("Invalid email address");
      setPasswordError(
        "Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
      );
      return;
    }

    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      ) === false
    ) {
      setEmailError("Invalid email address.");
      setPasswordError("");
      return;
    }

    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) ===
      false
    ) {
      setPasswordError(
        "Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
      );
      setEmailError("");
      return;
    }
    //If all input matches criteria, continue
    setPasswordError("");
    setEmailError("");
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
            required
            // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
            value={email}
            className={
              emailError ? style.field__input_error : style.field__input_normal
            }
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          {emailError && (
            <p className={style.input__error_message}>{emailError}</p>
          )}

          <div className={style.input__password}>
            <input
              type={!passVisible ? "password" : "text"}
              required
              value={password}
              className={
                passwordError
                  ? style.field__input_error
                  : style.field__input_normal
              }
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {passwordError && (
              <p className={style.input__error_message}>{passwordError}</p>
            )}

            <div
              className={style.input__visibility}
              onClick={() => setPassVisible(!passVisible)}
            >
              {!passVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
          </div>

          {/* {error && <p className={style.error__text}>{error}</p>} */}

          {!email.length || !password.length ? (
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
