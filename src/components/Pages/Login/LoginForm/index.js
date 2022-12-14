import React, { useEffect, useContext } from "react";
import { Button } from "../../../general/Button";
import style from "./loginform.module.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./../../../../utils/firebase-config";
import { UserContext } from "../../../../utils/user.context";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const { storeUser, authenticateUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //Login util
  const login = async (userAuth, userEmail, userPassword) => {
    try {
      await signInWithEmailAndPassword(userAuth, userEmail, userPassword);
      authenticateUser();
      navigate("/");
    } catch (error) {
      if (error.message.includes("wrong-password")) {
        setPasswordError("Invalid email address or password.");
        setEmailError("");
      }

      if (error.message.includes("user-not-found")) {
        setEmailError("User not found.");
        setPasswordError("");
      }
    }
  };

  //Grab user info and save it in state
  useEffect(() => {
    (async () => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser !== undefined) {
          storeUser(currentUser.email);
        } else {
          return;
        }
      });
    })();
  }, [storeUser]);

  //Login after submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Validate user inputs
    if (!email.length || !password.length) {
      setPasswordError("Required!");
      setEmailError("Required!");
      return;
    }

    if (
      emailRegex.test(email) === false &&
      passwordRegex.test(password) === false
    ) {
      setEmailError("Invalid email address");
      setPasswordError(
        "Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
      );
      return;
    }

    if (emailRegex.test(email) === false) {
      setEmailError("Invalid email address.");
      setPasswordError("");
      return;
    }

    if (passwordRegex.test(password) === false) {
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

  return (
    <section className={style.form__container}>
      <form onSubmit={handleSubmit}>
        <div className={style.form__wrapper}>
          <h1>LOGIN</h1>

          <div className={style.input__email}>
            <input
              type="email"
              value={email}
              className={
                emailError
                  ? style.field__input_error
                  : style.field__input_normal
              }
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p
              className={
                emailError
                  ? style.input__error_message_visible
                  : style.input__error_message_invisible
              }
            >
              {emailError}
            </p>
          </div>

          <div className={style.input__password}>
            <input
              type={!passVisible ? "password" : "text"}
              className={
                passwordError
                  ? style.field__input_error
                  : style.field__input_normal
              }
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p
              className={
                passwordError
                  ? style.input__error_message_visible
                  : style.input__error_message_invisible
              }
            >
              {passwordError}
            </p>

            <div
              className={style.input__visibility}
              onClick={() => setPassVisible(!passVisible)}
            >
              {!passVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
          </div>

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
            <br /> Don???t have an account?
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
