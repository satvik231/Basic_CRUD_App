import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";
const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">CRUD App</div>
        <div className="nav-links">
          <Link to="/">Create Post</Link>
          <Link to="/read">All Posts ({allUsers.length})</Link>
        </div>
        <input
          placeholder="Search"
          className="search-box"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </nav>
    </div>
  );
};

export default Navbar;
