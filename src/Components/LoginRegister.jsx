import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import login from '../assets/animations/Animation - 1733580815312.json'
import auth from "../Firebase/firebase.config";
import { toast } from "react-toastify";
import Lottie from "lottie-react";

const LoginRegister = () => {
  const { userLogin, createNewUser, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

 
    
      userLogin(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);
          toast("🦄 Successfully Login!");
          navigate("/");
        })
        .catch(() => {
          toast.error("Login failed!");
          form.reset()
        });
    }
  

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const email = form.email.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password does not match requirements");
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast("Register Successfully!!");
            navigate("/");
          })
          .catch(() => {
            toast.error("Register failed!!");
          });
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast("Google login Successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google login Failed!");
      });
  };

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-4">
      <Lottie animationData={login} loop={true}  className="w-full h-full "/>
      <div className="dark:bg-black shadow-xl rounded-3xl w-full max-w-md overflow-hidden border border-[#1caf76]">
        <div className="flex justify-center border-b">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-4 text-lg font-bold ${
              isLogin
                ? "text-[#1caf76] border-b-4 border-[#1caf76]"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-4 text-lg font-bold ${
              !isLogin
                ? "text-[#1caf76] border-b-4 border-[#1caf76]"
                : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        <div className="p-8">
          {isLogin ? (
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold  text-center">
                  Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-6">
                  Login to your account
                </p>
                <div>
                  <label className="block text-sm font-medium ">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 mt-1  border  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                    required
                  />
                  <span
                    onClick={toggleVisibility}
                    className="cursor-pointer absolute right-[4rem] top-[49.5rem] md:right-[13rem] md:top-[71rem] lg:right-[4rem] lg:top-[35rem]"
                  >
                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#1caf76] text-white font-semibold rounded-lg hover:bg-[#1caf76] transition duration-200"
                >
                  Login
                </button>
                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </form>
              <div className="text-center my-3 flex mx-auto">
                <button
                  onClick={handleGoogle}
                  className="btn w-full font-semibold px-12 md:px-24"
                >
                  <FcGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </button>
              </div>

              <p className="text-center font-semibold">
                Don't have an account?{" "}
                <Link className="text-[#1caf76]" onClick={() => setIsLogin(false)} >
                  Register
                </Link>
              </p>
            </div>
          ) : (
             <div>
            <form onSubmit={handleRegister} className="space-y-4">
              <h2 className="text-2xl font-bold  text-center">
                Create Account
              </h2>
              <p className="text-center text-gray-500 mb-6">
                Sign up for a new account
              </p>
              <div>
                <label className="block text-sm font-medium ">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium ">Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1  border  rounded-lg  focus:outline-none focus:ring-2 focus:ring-[#1caf76]"
                  required
                />
                <span
                  onClick={toggleVisibility}
                  className="cursor-pointer absolute right-[4rem] top-[60rem] md:right-[13rem] md:top-[81.5rem] lg:right-[4rem] lg:top-[40rem] "
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#1caf76] text-white font-semibold rounded-lg hover:bg-[#1caf76] transition duration-200"
              >
                Register
              </button>

              <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
            </form>
            <div className="text-center my-3 flex mx-auto">
                <button
                  onClick={handleGoogle}
                  className="btn w-full font-semibold px-12 md:px-24"
                >
                  <FcGoogle className="text-2xl" />
                  <span>Sign in with Google</span>
                </button>
              </div>

              <p className="text-center font-semibold">
                Don't have an account?{" "}
                <Link className="text-[#1caf76]" onClick={() => setIsLogin(true)}>
                  LogIn
                </Link>
              </p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
