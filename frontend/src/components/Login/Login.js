import React, { useContext, useState, useEffect, useReducer } from "react";
import LoginContext from "../../store/login-context";
import { useHistory } from "react-router-dom";
import axios from "axios";
import classes from "./Login.module.css";

const DUMMY_USER = {
  username: "eehong555@gmail.com",
  password: "hong5555",
  firstName: "Ee Hong",
  lastName: "Lee",
  token: "secret",
};

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //add all validation here , only if true then isValid return true
    //currently only must have "@"" sign.
    return { value: action.val, isValid: action.val.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    //add all validation here, only if true, isValid return true
    //currently only must be longer than 8 character.
    return { value: action.val, isValid: action.val.trim().length >= 6 };
  }
  return { value: "", isValid: false };
};

function LoginPage() {
  const history = useHistory();
  //state to check if overall form is vali.
  const [formIsValid, setFormIsValid] = useState(false);

  // useReducer to dispatch
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const loginCtx = useContext(LoginContext);

  //extract out isValid from emailState and pwState
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // useEffect to check form validity everytime inputs change/
  useEffect(() => {
    console.log("Checking form validity!");
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  //function to handle typing into email field
  const emailHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  //function to handle typing into pw field
  const passwordHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //for now just console logging to make sure everything works.
    console.log(emailState.isValid);
    console.log(passwordState.isValid);
    console.log(formIsValid);

    axios
      .get("http://127.0.0.1:8000/user?email=hello%40dbs.com&password=password")
      .then((response) => {
        console.log(response);
        loginCtx.login(response.data);
        history.push("/shop");
      });
  };

  return (
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input onChange={emailHandler} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            onChange={passwordHandler}
            type="password"
            id="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginPage;
