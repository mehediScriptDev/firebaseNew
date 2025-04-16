import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Result } from "postcss";

const Login = () => {
  const {signInusr,signInWithGoogleHandler} = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = e =>{
    e.preventDefault();
    const email =e.target.email.value;
    const password =e.target.password.value;

    // signIn 
    signInusr(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
  }
  const googleSignIn = ()=>{
    signInWithGoogleHandler()
    .then(result=>{
      console.log(result.user)
      navigate('/')
    })
    .catch(err=>{
      console.log('found error');
      
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold">Log in now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={loginHandler}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <button type='button' onClick={googleSignIn} className="btn btn-neutral mt-4">Login with Google</button>
              </fieldset>
              <h3 className="mt-3">New to this? <Link to={'/register'} className="ml-2 underline">Register now!</Link></h3>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
