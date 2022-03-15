import { useState } from "react";
import { UserDetails } from "../Interface/UserAction";
import { userInfo } from "./Data/UserInfo";
import UserComponent from "./UserData/UserComponent";
const UserList = () => {
  const [records, setRecord] = useState(userInfo);
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
          {records.map((userRecord: UserDetails, index: number) => {
            return <UserComponent data={userRecord} key={index} />;
          })}
        </table>
      </div>
    </>
  );
};

export default UserList;
