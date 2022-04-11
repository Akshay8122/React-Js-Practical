import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersLogout } from "../../redux/actions/signupAction";
import { useNavigate } from "react-router-dom";
import { State } from "../../redux/reducers";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.users);
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("IsLoggedin", "false");
    localStorage.setItem("userName", "");
    localStorage.setItem("userEmail", "");
    localStorage.setItem("userPhone", "");
    localStorage.setItem("userImage", "");
    dispatch(usersLogout());
    navigation("/");
  };
  return (
    <div className="container">
      <div>
        {
          <img
            className="img"
            height="300"
            width="300"
            src={user.image as string}
            alt="profile"
          />
        }
      </div>
      <div className="userdetails">
        <div className="name">Name:{user.name}</div>
        <div className="email">Email:{user.email}</div>
        <div className="phone">
          Phone No:{user.phoneNo}
          <div>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
