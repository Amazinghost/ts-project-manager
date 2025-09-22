import { Link } from "react-router";
import { SIGNUP_URL } from "../constants/urls";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
  const [rememberChecked, setRememberChecked] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { login } = useUserStore();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordValue(e.target.value);
  };

  const handleRememberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRememberChecked(e.currentTarget.checked);
  };

  const handleLoginClick = async (): Promise<void> => {
    await login({ email: emailValue, password: passwordValue });
  };

  return (
    <div className="p-7 max-w-md inset-ring-2 rounded-xl flex flex-col items-center bg-gradient-to-r from-blue-700 to-emerald-200">
      <div className="p-3">
        <h3 className="text-center font-bold text-2xl">{"Login"}</h3>
      </div>
      <div className="mt-5">
        <input
          onChange={handleEmailChange}
          type="email"
          placeholder="Email"
          value={emailValue}
          className="input w-full"
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={passwordValue}
          className="input mt-3 w-full"
        />
      </div>
      <div className="w-full mt-5 flex justify-between">
        <label className="label">
          <input
            onChange={handleRememberChange}
            checked={rememberChecked}
            type="checkbox"
            name="remember"
            className="checkbox"
          />
          {"Remember me"}
        </label>
        <a className="link">{"Forgot password?"}</a>
      </div>
      <button onClick={handleLoginClick} className="btn mt-8 w-full">
        {"Login"}
      </button>
      <div className="mt-5 w-full flex justify-center">
        <p>{"Don't have an account?"}</p>
        <Link to={SIGNUP_URL} className="link ml-1">
          {"Sign Up"}
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
