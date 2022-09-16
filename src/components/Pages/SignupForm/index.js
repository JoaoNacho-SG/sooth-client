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
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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
      setError(error.message);
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
    //If all input matches criteria, continue
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
            // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={style.input__password}>
            <input
              type={!passVisible ? "password" : "text"}
              required
              // title="Password must have at least 8 characters, 1 uppercase, 1 lowercase and 1 number."
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
