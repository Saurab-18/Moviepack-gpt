import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const {uid,email,displayName} = auth.currentUser
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName
                })
              )
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="rounded-[2rem] absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Netflix background"
        />
      </div>
      <div className="bg-custom-color mt-[100px] mb-[3rem] pt-[3rem] flex gap-[16px] absolute flex-col px-[5%] max-w-[450px] min-h-[600px] mx-auto right-0 left-0 ">
        <h1 className="text-white text-[2rem] pt-[48px] font-bold mb-[28px]">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-[16px]"
        >
          {!isSignInForm && (
            <input
              className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem]  min-h-[16px] min-w-[16px] "
              ref={name}
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem] min-h-[16px] min-w-[16px] "
            type="text"
            ref={email}
            placeholder="Email or phone number"
          />
          <input
            className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem]  min-h-[16px] min-w-[16px] "
            type="password"
            ref={password}
            placeholder="Password"
          />
        </form>
        <p className="text-red-600 fon-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="w-[100%] mt-[24px] rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[0.7rem] min-h-[16px] min-w-[16px] bg-red-600 "
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white mt-[20px] cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registerd? Sign in now"}
        </p>
      </div>
    </div>
  );
};

export default Login;
