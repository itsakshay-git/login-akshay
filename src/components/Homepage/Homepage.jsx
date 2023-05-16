import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import styles from './Homepage.module.css'



const HomePage = () => {
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const registeredUsers = useSelector((state) => state.auth.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {setloggedin} = useOutletContext();


  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(logoutUser());
    setloggedin(false)
    // registeredUsers = null
    navigate("/login")
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
      <h2>Welcome, <span>{loggedInUser}</span></h2>
      <button className={styles.btn} onClick={(e) => handleLogout(e)}>Logout</button>
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {registeredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;