import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkAuth, logoutUser, setUser } from '../Redux/Slices/userSlice';

export default function NavBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  });

  return (
    <nav>
      <NavLink className="navlink" to="/datacard">
        <button className="navlink-button" type="button">Datacard</button>
      </NavLink>
      <NavLink className="navlink" to="/add">
        <button className="navlink-button" type="button">ADD</button>
      </NavLink>
      <NavLink className="navlink" to="/registration">
        <button className="navlink-button" type="button">Registration</button>
      </NavLink>
      <NavLink className="navlink" to="/login">
        <button className="navlink-button" type="button">Login</button>
      </NavLink>
      <NavLink className="navlink" to="/">
        <button
          onClick={() => {
            dispatch(logoutUser());
            dispatch(setUser({}));
          }}
          className="navlink-button"
          type="button"
        >
          Logout

        </button>
      </NavLink>
    </nav>
  );
}
