import React from "react";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoggedIn((e) => true);
        }}
      >
        <label htmlFor="username">Username </label>
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
