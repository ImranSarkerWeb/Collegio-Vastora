/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      const gmailUser = result.user;
      console.log("user created using gmail", gmailUser);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="text-center mt-28 mb-10">
      <h2 className="text-4xl my-8">Please Login!</h2>
      <form onSubmit={handleSignIn}>
        <div>
          <input
            autoComplete="username"
            type="email"
            placeholder="Your Email"
            required
            name="email"
            className="input input-bordered input-accent input-md w-full max-w-xs"
          />
        </div>
        <div className="my-8">
          <input
            type="password"
            required
            autoComplete="current-password"
            name="password"
            placeholder="Password"
            className="input input-bordered input-accent input-md w-full max-w-xs"
          />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button className="btn w-full btn-accent max-w-xs mt-4">Login</button>
      </form>
      <p className="mt-4">
        <small>
          Don&apos;t have account? Please{" "}
          <Link to="/register" className="text-accent">
            Register
          </Link>
        </small>
      </p>
      <div className="divider w-full max-w-xs mx-auto my-8">OR</div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-accent mb-4  w-full max-w-xs"
        >
          <FaGoogle className="me-2 text-amber-400" /> Login With Google
        </button>{" "}
      </div>
    </div>
  );
};

export default Login;
