import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { emailAuth } from "../helpers/emailAuth";
import { googleAuth } from "../helpers/googleAuth";
import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const updateLogin = (evt) => {
    const copy = { ...login };
    copy[evt.target.id] = evt.target.value;
    setLogin(copy);
  };

  // Login With Email & Password
  const onSubmitLoginEmail = async (e) => {
    e.preventDefault();
    emailAuth.signIn(login, navigate);
  };

  // Login with Google
  const onSubmitLoginGoogle = async () => {
    googleAuth.signInRegister(navigate);
  };

  return (
    <main className="container--login">
      <section>
        <Form className="form--login" onSubmit={onSubmitLoginEmail}>
          <h1>Jiu Jits You</h1>
          <h2>Please sign in</h2>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              type="email"
              value={login.email}
              id="email"
              onChange={(evt) => updateLogin(evt)}
              className="form-control"
              key={`form-email`}
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              type="password"
              value={login.password}
              id="password"
              onChange={(evt) => updateLogin(evt)}
              className="form-control"
              placeholder="Password"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <Button type="submit">Sign in</Button>
          </fieldset>
        </Form>
      </section>
      <section className="link--register">
        <Link to="/register">Not a member yet?</Link>
      </section>
      <h2>Login With Google?</h2>
      <Button type="submit" onClick={onSubmitLoginGoogle}>
        Let's Do It!
      </Button>
    </main>
  );
};
