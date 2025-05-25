import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
      <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="bgImg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input 
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input 
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800"
          />
          <input 
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800"
          />
          <button 
          className="p-4 my-6 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
          className="py-4 cursor-pointer" onClick={handleToggle}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
          </p>
      </form>
    </div>
  )
}

export default Login