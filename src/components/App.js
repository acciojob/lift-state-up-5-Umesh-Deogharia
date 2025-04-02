
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login.jsx";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? <p>You are logged in!</p> :
        <Login setIsLoggedIn={setIsLoggedIn} />
      }
    </div>
  );
}

export default App
