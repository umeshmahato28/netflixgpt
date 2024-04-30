import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link,useNavigate } from "react-router-dom";

const Login = () => {

  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()


  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message)

    if(message) return

    signInWithEmailAndPassword(auth,email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate("/browse")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + " "+ errorMessage)
    });
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-gradient-to-t from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-bg"
        />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black bg-opacity-70 rounded-lg w-3/12 my-36 mx-auto right-0 left-0 text-white ">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700/50 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 rounded-md bg-red-600 w-full"
          onClick={handleButtonClick}
        >
          Sign In
        </button>
        <p className="py-4">New to Netflix? <Link to='/signup'>Sign up now</Link> </p>
      </form>
    </div>
  );
};

export default Login;
