import React, { useState, Fragment } from "react";
import { UserDetails } from "../Interface/UserAction";
import { userInfo } from "./Data/UserInfo";
import UsersCard from "./UserCard/UserCard";
import UserComponent from "./UserData/UserComponent";

const UserList = () => {
  const [user, setUser] = useState<UserDetails | null>(null);

  return (
    <>
      {/* Users List */}
      <div className="container">
        <table className="table table-borderless main_div">
          <thead>
            <tr>
              <th className="pl-4 pb-2">Name</th>
              <th className="pl-3 pb-2">Status</th>
              <th className="pl-3 pb-2">Acceess</th>
            </tr>
          </thead>

          {/* Mapping Users  */}
          {userInfo.map((userRecord: UserDetails) => {
            return (  
              <Fragment key={userRecord.id}>
                <UserComponent
                  isActive={userRecord.status === "Active" ? true : false}
                  data={userRecord}
                  setUser={setUser}
                />

                <tbody>
                  <tr>
                    <td>{user !== null && <UsersCard user={user} />}</td>
                  </tr>
                </tbody>
              </Fragment>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default UserList;
