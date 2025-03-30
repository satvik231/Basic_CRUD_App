import React, { useEffect, useState } from "react";
import "./Create.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/userDetailSlice";
const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };
  const handleUpadte = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    e.target.reset();
    navigate("/read");
    console.log(updateData);
  };
  return (
    <div className="form">
      <div className="form-card">
        <h2>Fill the Data</h2>
        <form onSubmit={handleUpadte}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={updateData && updateData.name}
            placeholder="Enter your name"
            onChange={newData}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={updateData && updateData.email}
            placeholder="Enter your email"
            onChange={newData}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={updateData && updateData.age}
            placeholder="Enter your age"
            onChange={newData}
          />

          <label>Gender</label>
          <div className="gender">
            <input
              type="radio"
              value="male"
              name="gender"
              checked={updateData && updateData.gender === "male"}
              onChange={newData}
            />
            <label>Male</label>

            <input
              type="radio"
              value="female"
              name="gender"
              checked={updateData && updateData.gender === "female"}
              onChange={newData}
            />
            <label>Female</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
