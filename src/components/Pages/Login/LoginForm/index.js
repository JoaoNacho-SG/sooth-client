import React from "react";
import { Button } from "../../../general/Button";
import style from "./loginform.module.scss";

export const LoginForm = () => {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={style.form__container}>
          <h1>LOGIN</h1>
          <input type="email" required placeholder="Email Address" />
          <input type="password" required placeholder="Password" />
          <Button btnContent={"Continue"} btnClass={"login"} type="submit" />
        </div>
      </form>
    </section>
  );
};
