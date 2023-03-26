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
          <NavLink className="navlink" to="/datacard">
            <button className="navlink-button" type="button">DATACARD</button>
          </NavLink>
          <NavLink className="navlink" to="/add">
            <button className="navlink-button" type="button">ADD</button>
          </NavLink>
          <NavLink className="navlink" to="/">
            <button
              onClick={() => {
                dispatch(logoutUser());
                // dispatch(setUser({}));
                // console.log(user, '******************');
              }}
              className="navlink-button"
              type="button"
            >
              LOGOUT

            </button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink className="navlink" to="/registration">
            <button className="navlink-button" type="button">SIGNUP</button>
          </NavLink>
          <NavLink className="navlink" to="/login">
            <button className="navlink-button" type="button">SIGNIN</button>
          </NavLink>
        </>
      )}
    </nav>
  );
}
