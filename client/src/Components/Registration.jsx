import React from 'react';
import { useDispatch } from 'react-redux';
import { regUser } from '../Redux/Slices/userSlice';
import './Styles/RegisterLogin.css';

export default function Registration() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(regUser(Object.fromEntries(new FormData(e.target))));
  };

  return (
    <form onSubmit={submitHandler} className="form-auth frame">
      <h2 className="form-auth_header">REGISTRATION</h2>
      <label htmlFor="fullname" className="form-auth_label">
        Full name
        <input required className="form-auth_label_input" type="text" name="fullname" placeholder="" />
      </label>
      <label htmlFor="email" className="form-auth_label">
        Email
        <input required className="form-auth_label_input" type="text" name="email" placeholder="" />
      </label>
      <label htmlFor="password" className="form-auth_label">
        Password
        <input required className="form-auth_label_input" type="text" name="password" placeholder="" />
      </label>
      <label htmlFor="confirmpassword" className="form-auth_label">
        Confirm password
        <input required className="form-auth_label_input" type="text" name="confirmpassword" placeholder="" />
      </label>
      <button type="submit" className="form-auth_button">Sign up</button>
    </form>
  );
}
