import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!email || !name || !password) {
      setError("Please fill in all fields");
    } else if (!validateEmail(email)) {
      setError("Invalid email");
    } else {
      dispatch(registerUser({ email, name, password }));
      navigate("/login");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <header className="App-header">
    <Card>
      <h2>Register</h2>
      <form action="">
        <div className={styles.inputs_container}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={(e) => handleRegister(e)}>Register</button>
          <p className={styles.navigate}>
            Already have accout <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </Card>
    </header>
  );
};

export default Register;
