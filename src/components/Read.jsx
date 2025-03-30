import React, { useEffect, useState } from "react";
import "./Read.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";
const Read = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showUser());
  }, []);
  const { users, loading, searchData } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }
  return (
    <div>
      {showPopup && <CustomModel id={id} setShowPopup={setShowPopup} />}
      <div className="container">
        {users.length == 0 ? <h2>No Data</h2> : <h2>All Data</h2>}
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .map((ele) => (
              <div className="card" key={ele.id}>
                <h3>Name: {ele.name}</h3>
                <p>
                  <strong>Email:</strong>
                  {ele.email}
                </p>
                <p>
                  <strong>Age:</strong> {ele.age}
                </p>
                <div className="card-buttons">
                  <button
                    className="view"
                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                  >
                    View
                  </button>
                  <Link to={`/update/${ele.id}`} className="edit">
                    Edit
                  </Link>
                  <button
                    className="delete"
                    onClick={() => dispatch(deleteUser(ele.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Read;
