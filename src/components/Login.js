import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
          srcset=""
        />
      </div>
      <div className="bg-custom-color mt-[100px] mb-[3rem] pt-[3rem] flex gap-[16px] absolute flex-col px-[5%] max-w-[450px] min-h-[600px] mx-auto right-0 left-0 ">
        <h1 className="text-white text-[2rem] pt-[48px] font-bold mb-[28px]">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form className="flex flex-col gap-[16px]">
        {!isSignInForm && <input
            className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem]  min-h-[16px] min-w-[16px] "
            type="text"
            placeholder="Full Name"
          /> }
          <input
            className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem] min-h-[16px] min-w-[16px] "
            type="text"
            placeholder="Email or phone number"
          />
          <input
            className="w-[100%] text-white border border-white  bg-custom-color rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[1rem]  min-h-[16px] min-w-[16px] "
            type="password"
            placeholder="Password"
          />
        </form>
        <button className="w-[100%] mt-[24px] rounded-[0.25rem] px-[1rem] text-[1rem] leading-[1.5] py-[0.7rem] min-h-[16px] min-w-[16px] bg-red-600 ">
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
