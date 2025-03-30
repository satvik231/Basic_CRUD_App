import React from "react";
import { useSelector } from "react-redux";
import "./CustomModel.css";

const CustomModel = ({ id, setShowPopup }) => {
  const allUsers = useSelector((state) => state.app.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div
      className="modal"
      style={{ display: singleUser.length > 0 ? "flex" : "none" }}
    >
      <div className="modal-content">
        <button className="close-btn" onClick={() => setShowPopup(false)}>
          ×
        </button>
        {singleUser.length > 0 ? (
          <>
            <h2>Name: {singleUser[0].name}</h2>
            <p>
              <strong>Email:</strong> {singleUser[0].email}
            </p>
            <p>
              <strong>Gender:</strong> {singleUser[0].gender}
            </p>
            <p>
              <strong>Age:</strong> {singleUser[0].age}
            </p>
          </>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default CustomModel;
