import { Link } from "react-router";
import { SIGNUP_URL } from "../constants/urls";

const LoginPage = () => {
  return (
    <div className="p-7 inset-ring-2  rounded-xl flex flex-col items-center bg-gradient-to-r from-blue-700 to-emerald-200">
      <div className="p-3">
        <h3 className="text-center font-bold text-2xl">Login</h3>
      </div>
      <div className="mt-5">
        <input type="email" placeholder="Email" className="input w-full" />
        <input
          type="password"
          placeholder="Password"
          className="input mt-3 w-full"
        />
      </div>
      <div className="w-full mt-5 flex justify-between">
        <label className="label">
          <input
            checked={true}
            type="checkbox"
            name="remember"
            className="checkbox"
          />
          Remember me
        </label>
        <a className="link">Forgot password?</a>
      </div>
      <button className="btn mt-8 w-full max-w-full">Login</button>
      <div className="mt-5 w-full flex justify-center">
        <p>Don't have an account?</p>
        <Link to={SIGNUP_URL} className="link ml-1">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
