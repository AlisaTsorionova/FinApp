import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logUser } from '../Redux/Slices/userSlice';
import './Styles/RegisterLogin.css';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logUser(Object.fromEntries(new FormData(e.target))));
    navigate('/');
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      navigate('/');
    }
  }, [user]);

  return (
    <form onSubmit={submitHandler} className="form-auth frame">
      <h2 className="form-auth_header">Login</h2>
      <label htmlFor="email" className="form-auth_label">
        Email
        <input required className="form-auth_label_input" type="text" name="email" placeholder="" />
      </label>
      <label htmlFor="password" className="form-auth_label">
        Password
        <input required className="form-auth_label_input" type="text" name="password" placeholder="" />
      </label>
      <button type="submit" className="form-auth_button">Sign in</button>
    </form>
  );
}
