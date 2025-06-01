import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "./constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });

      return () => unsubscribe();
    }, []);
  

  return (
    <>
      <div className="absolute w-screen px-8 py-2 !custom-gradient z-10 flex justify-between">
        <img
          className="w-44"
          src={LOGO}
          alt="logo"
        />

        {user && (
          <div className="flex p-4">
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button
              className="font-bold cursor-pointer !text-red-800"
              onClick={handleSignout}
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
