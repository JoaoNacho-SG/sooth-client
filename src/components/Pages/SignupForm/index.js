import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../utils/user.context";
import style from "./signupform.module.scss";
import { Button } from "../../general/Button";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { auth } from "../../../utils/firebase-config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const { storeUser, authenticateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  //Create Account util
  const register = async (userAuth, userEmail, userPassword) => {
    try {
      await createUserWithEmailAndPassword(userAuth, userEmail, userPassword);
      authenticateUser();
      navigate("/");
    } catch (error) {
      if (error.message.includes("email-already-in-use")) {
        setEmailError("Email is already registered.");
        setConfirmPassword("");
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

  //Create account after submit form
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

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords don't match.");
      setEmailError("");
      setPasswordError("");
      return;
    }
    //If all input matches criteria, continue
    setPasswordError("");
    setConfirmPasswordError("");
    setEmailError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    await register(auth, email, password);
  };

  return (
    <section className={style.form__container}>
      <form onSubmit={handleSubmit}>
        <div className={style.form__wrapper}>
          <h1>REGISTER</h1>

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
                passwordError || confirmPasswordError
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

          <div className={style.input__password}>
            <input
              type={!confirmPassVisible ? "password" : "text"}
              className={
                confirmPasswordError
                  ? style.field__input_error
                  : style.field__input_normal
              }
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <p
              className={
                confirmPasswordError
                  ? style.input__error_message_visible
                  : style.input__error_message_invisible
              }
            >
              {confirmPasswordError}
            </p>

            <div
              className={style.input__visibility}
              onClick={() => setConfirmPassVisible(!confirmPassVisible)}
            >
              {!confirmPassVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
          </div>

          {!email.length || !password.length || !confirmPassword.length ? (
            <Button
              btnContent={"Create Account"}
              btnClass={"disabled"}
              type="submit"
            />
          ) : (
            <Button
              btnContent={"Create Account"}
              btnClass={"login"}
              type="submit"
            />
          )}

          <p className={style.signin__text}>
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
