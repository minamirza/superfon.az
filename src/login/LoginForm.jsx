import React, { useState } from "react";
import logo from "../../src/assets/logo.svg";
import { Link } from "react-router-dom";


export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Zəhmət olmasa, bütün xanaları doldur 🫠");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember me:", remember);

    alert(`Xoş gəldin, ${email}! 🔐`);
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo cursor-pointer" />
        </Link>
        <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
          <div
            className="p-6 space-y-4 md:space-y-6 sm:p-8"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "3rem",
            }}
          >
            <h1
              className="flex flex-row items-center gap-2 text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
              style={{ paddingBottom: "20px" }}
            >
              Hesabınıza daxil olun
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                  style={{ paddingBottom: "10px" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  style={{ paddingBlock: "5px", paddingLeft: "15px" }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                  style={{
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Parol
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  style={{ paddingBlock: "5px", paddingLeft: "15px" }}
                />
              </div>
              <div
                className="flex items-center justify-between"
                style={{ paddingTop: "10px" }}
              >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-sm font-light text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-[100%] rounded-md bg-purple-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-purple-950"
                style={{ padding: "1rem", marginBlock: "1rem" }}
              >
                Daxil ol
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
