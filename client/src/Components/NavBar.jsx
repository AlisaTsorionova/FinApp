import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkAuth, logoutUser, setUser } from '../Redux/Slices/userSlice';
import './Styles/NavBar.css';

export default function NavBar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <nav>
      {Object.keys(user).length ? (
        <>
          <NavLink className="navlink-button" to="/datacard">
            DATACARD
          </NavLink>
          <NavLink className="navlink-button" to="/add">
            ADD
          </NavLink>
          <NavLink
            className="navlink-button"
            to="/"
            onClick={() => {
              dispatch(logoutUser());
            }}
          >
            LOGOUT
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="navlink-button" to="/registration">
            SIGN UP
          </NavLink>
          <NavLink className="navlink-button" to="/login">
            SIGN IN
          </NavLink>
        </>
      )}
    </nav>
  );
}
