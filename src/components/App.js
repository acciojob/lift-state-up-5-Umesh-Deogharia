
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login.jsx";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {isLoggedIn ? <h1>You are logged in</h1> :
        <Login setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App
