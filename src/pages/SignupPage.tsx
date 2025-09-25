import { Link } from "react-router";
import { LOGIN_URL } from "../constants/urls";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const { signUp } = useUserStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(e.target.value);
  };

  const handleSignupClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    signUp({ email, password, confirmPass });
  };

  return (
    <div className="p-7 max-w-md flex flex-col items-center rounded-xl bg-gradient-to-r from-blue-700 to-emerald-200 inset-ring-2">
      <div className="p-3">
        <h3 className="text-2xl font-bold">{"Sign Up"}</h3>
      </div>
      <div className="mt-5">
        <input
          className="input w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="input mt-3 w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          className="input mt-3 w-full"
          type="password"
          placeholder="Confirm password"
          value={confirmPass}
          onChange={handleConfirmPassChange}
        />
      </div>
      <button className="mt-8 btn w-full" onClick={handleSignupClick}>
        {"Sign up"}
      </button>
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
