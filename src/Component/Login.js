import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        // Using window.location.href as a fallback
        window.location.href = "/"; // Redirect to home page after login
      } else {
        console.log("User is logged out");
      }
    });

    return () => unsubscribe();
  }, []);

  const handlelogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Login Successful!");
        alert("Login Successful!");
        // history.push("/home"); // Moved to useEffect to ensure it only navigates once
      })
      .catch((error) => {
        setError(error.message);
        console.log("Error signing in :", error);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    let timeout;
  
    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleLogout();
        history.push("/login"); // Redirect to login page after logout due to inactivity
      }, 2 * 60 * 1000); // 30 minutes in milliseconds
    };
  
    const onUserActivity = () => {
      resetTimeout();
    };
  
    window.addEventListener("mousemove", onUserActivity);
    window.addEventListener("keydown", onUserActivity);
  
    resetTimeout();
  
    return () => {
      window.removeEventListener("mousemove", onUserActivity);
      window.removeEventListener("keydown", onUserActivity);
      clearTimeout(timeout);
    };
  }, [history]);
  
  return (
    <>
      <div className="LoginPage">
        <form className="LoginForm" onSubmit={handlelogin}>
          <h2>Welcome back!</h2>
          <div className="LoginInputBox">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="LoginInputBox">
            <label>Password *</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <button type="submit" className="Loginbtn">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
