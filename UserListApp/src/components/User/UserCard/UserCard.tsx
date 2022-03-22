import { UserDetails } from "../../Interface/UserAction";
import "./UserCard.css";

const UsersCard = ({ user }: { user: UserDetails }) => {
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
                user.status === "Active" ? "text-success" : "text-secondary"
              }`}
              style={{ fontSize: "1.6rem" }}
            >
              &#729;
            </span>
          </p>
          <p className="userEmail m-1">{user.email}</p>
          <p className="userPlan m-0">Your Plan: {user.plan}</p>
          <button
            className={`btn ${
              user.status === "Active" ? "btn-warning" : "btn-danger"
            } w-70 fw-bold text-white mt-2`}
          >
            {user.status} User
          </button>
          <label className="userPlanUses p-0 mb-0">Plan Uses</label>
          <div className="totalPlanUses">
            <div className="planBar"></div>
          </div>
          <div className="cardReviewe">
            <div>
              <div className="clickReviewed">{user.reviewed}</div>
              <div className="reviewedText">Clicks reviewed</div>
            </div>
            <div className="line"></div>
            <div>
              <div className="monthlyClick">{user.monthly_click}</div>
              <div className="monthlyClickText">Monthly clicks</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersCard;
