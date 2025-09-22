import { Link } from "react-router";
import { LOGIN_URL } from "../constants/urls";

const SignupPage = () => {
  return (
    <div className="p-7 max-w-md flex flex-col items-center rounded-xl bg-gradient-to-r from-blue-700 to-emerald-200 inset-ring-2">
      <div className="p-3">
        <h3 className="text-2xl font-bold">{"Sign Up"}</h3>
      </div>
      <div className="mt-5">
        <input className="input w-full" type="email" placeholder="Email" />
        <input
          className="input mt-3 w-full"
          type="password"
          placeholder="Password"
        />
        <input
          className="input mt-3 w-full"
          type="password"
          placeholder="Confirm password"
        />
      </div>
      <button className="mt-8 btn w-full">{"Sign up"}</button>
      <div className="mt-5 flex justify-center w-full">
        <p>Already have an account?</p>
        <Link className="ml-1" to={LOGIN_URL}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
