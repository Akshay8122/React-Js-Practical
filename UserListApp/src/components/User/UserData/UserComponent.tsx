import { FC } from "react";
import * as Icon from "react-feather";
import { UserDetails } from "../../Interface/UserAction";
// import UsersCard from "../UserCard/UserCard";
import "./UserComponent.css";

const UserComponent: FC<{
  setUser: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  data: UserDetails;
  isActive: boolean;
}> = ({ data, setUser, isActive }) => {
  return (
    <>
      <tbody>
        <tr>
          <td
            className="d-flex"
            onMouseEnter={() => {
              return setUser(data);
            }}
            onMouseLeave={() => {
              return setUser(null);
            }}
          >
            <div className="icon">
              <picture>
                <img
                  className="profileImg img-fluid img-thumbnail rounded-circle p-0"
                  src={data.avatar}
                  alt="owner_avatar"
                />
              </picture>
            </div>
            <div className="ms-2 c-details ml-3 font-weight-bold">
              <h6 className="mb-0">
                {data.first_name} {data.last_name}
              </h6>
              <span>{data.email}</span>
            </div>
          </td>
          {isActive ? (
            <>
              <td>
                <span className="text-success pl-3">{data.status}</span>
              </td>
              <td>
                <span className="pl-4">{data.access}</span>
              </td>
              <td className="col-md-2">
                {/* feather Icon */}
                <Icon.Lock
                  size={18}
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                />
              </td>
            </>
          ) : (
            <>
              <td>
                <select className="selectMenu">
                  <option value="Inactive">Inactive</option>
                  <option value="Active">Active</option>
                </select>
              </td>
              <td>
                <select className="selectMenu">
                  <option value="Manager">Manager</option>
                  <option value="Read">Read</option>
                </select>
              </td>
              <td className="col-md-2">
                {/* feather Icon */}
                <Icon.Trash2
                  size={18}
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                />
              </td>
            </>
          )}
        </tr>
      </tbody>
    </>
  );
};

export default UserComponent;
