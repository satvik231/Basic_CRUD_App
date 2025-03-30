import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
const Create = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    e.target.reset();
    console.log(users);
    navigate("/read");
  };

  return (
    <div className="form">
      <div className="form-card">
        <h2>Fill the Data</h2>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={getUserData}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={getUserData}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={getUserData}
          />

          <label>Gender</label>
          <div className="gender">
            <input
              type="radio"
              value="male"
              name="gender"
              onChange={getUserData}
            />
            <label>Male</label>

            <input
              type="radio"
              value="female"
              name="gender"
              onChange={getUserData}
            />
            <label>Female</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
