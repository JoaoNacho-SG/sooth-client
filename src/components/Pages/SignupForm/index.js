import React, { useEffect, useState } from "react";
import style from "./signupform.module.scss";
import { Button } from "../../general/Button";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { auth } from "../../../utils/firebase-config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [error, setError] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  const [userInSession, setUserInSession] = useState(null);

  const navigate = useNavigate();

  //Create Account util
  const register = async (userAuth, userEmail, userPassword) => {
    try {
      await createUserWithEmailAndPassword(userAuth, userEmail, userPassword);
      navigate("/");
    } catch (error) {
      console.log("error----->", error);
      // setError(error.message);
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

  //Signout util
  const logout = async () => {
    await signOut(auth);
  };

  //Create account after submit form
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
    await register(auth, email, password);
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
          <h1>REGISTER</h1>

          <input
            type="email"
            required
            value={email}
            className={
              emailError ? style.field__input_error : style.field__input_normal
            }
            // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
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
