import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authSlice';
import { useOutletContext } from "react-router-dom";



const Login = () => {
  const registeredUsers = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const {loggedin, setloggedin} = useOutletContext();


  const handleLogin = (e) => {
    e.preventDefault()
    setloggedin(true)
    const user = registeredUsers.find((user) => user.email === email && user.password === password);
    if (loggedin && user) {
      dispatch(loginUser({ email, password }));
      navigate("/home")
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <header className="App-header">
      <Card>
        <h2>Login</h2>
        <form action="">
          <div className={styles.inputs_container}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={(e) => handleLogin(e)}>Login</button>
          {loginError && <p>{loginError}</p>}
          <p className={styles.navigate}>Have an Account<Link to="/">Rgister</Link></p>
          </div>
        </form>
      </Card>
    </header>
  );
};

export default Login;
