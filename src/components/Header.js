import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO,USER_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error")
      });
  };

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, uid, displayName } = user;
      dispatch(
        addUser({ 
          email,
          uid, 
          displayName 
        })
      );
      navigate('/browse')
    }
    else {
      dispatch(removeUser());
      navigate('/')
    }
  });
  return () => unsubscribe() 
 },[])

  return (
    <div className="absolute z-10  ">
      <div className="flex flex-row justify-between w-screen px-8 py-2 bg-gradient-to-b from-black"> 
        <img
          className="w-[200px]"
          src={LOGO}
          alt="Logo"
        />
        {user && <div className="flex flex-row justify-center items-center  ">
        <button className="bg-purple-800 text-white rounded-md mx-[10px] px-4 py-3">GPT Search</button>
          <img
            className="h-[50px] w-[50px] mx-[10px]"
            src={USER_LOGO}
            alt="userLogo"
          />
          <button
            onClick={handleSignOut}
            className="mx-[10px]  text-white text-[20px]"
          >
            Sign Out
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Header;
