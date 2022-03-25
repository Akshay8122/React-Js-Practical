import React from "react";
import { UsersAction } from "../../Interface/userAction";
import "./UserCard.css";

const UsersCard = ({ user }: { user: UsersAction | null }) => {
  return (
    <>
      {/* User Profile Page */}
      {user !== null && (
        <div className="userCard bg-white">
          <img src={user.avatar} alt={user.first_name} className="avtar_img" />
          <p className="userName pt-2 m-0">
            {user.first_name} {user.last_name}
            <span
              className={`${
                user.id === 1 || user.id === 7
                  ? "text-success"
                  : "text-secondary"
              }`}
              style={{ fontSize: "1.5rem" }}
            >
              &#729;
            </span>
          </p>
          <p className="userEmail m-1">{user.email}</p>
          <p className="userPlan m-0">Your Plan: Standard</p>
          <button
            className={`btn ${
              user.id === 1 || user.id === 7 ? "btn-warning" : "btn-danger"
            } w-70 fw-bold text-white mt-2`}
          >
            {user.id === 1 || user.id === 7 ? "Active User" : "Inactive User"}
          </button>
          <label className="userPlanUses p-0 mb-0">Plan Uses</label>
          <div className="totalPlanUses">
            <div className="planBar"></div>
          </div>
          <div className="wrappedReviewe">
            <div>
              <div className="clickReviewed">2450</div>
              <div className="reviewedText">Clicks reviewed</div>
            </div>
            <div className="line"></div>
            <div>
              <div className="monthlyClick">5000</div>
              <div className="monthlyClickText">Monthly clicks</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersCard;
