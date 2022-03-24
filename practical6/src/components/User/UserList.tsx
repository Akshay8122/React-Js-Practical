import React, { useState, Fragment } from "react";
import { UsersAction } from "../Interface/userAction";
import { Pagination } from "../Pagination/Pagination";
import { useGetUsersQuery } from "./Data/usersAPI";
import UsersCard from "./UserCard/UserCard";
import UserComponent from "./UsersData/UserComponent";

const UserList = () => {
  const [user, setUser] = useState<UsersAction | null>(null);
  const [page, setPage] = useState(1);
  const { data: data, isLoading } = useGetUsersQuery(page);

  return (
    <>
      {/* Users List */}
      <div className="container">
        <table className="table table-borderless main_div">
          <thead>
            <tr>
              <th className="pl-2">Name</th>
              <th className="pl-3">Status</th>
              <th className="pl-3">Acceess</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && "... Loading"}
            {data?.data.map((userRecord: UsersAction) => {
              return (
                <Fragment key={userRecord.id}>
                  <UserComponent data={userRecord} setUser={setUser} />

                  <tbody>
                    <tr>
                      <td>{user !== null && <UsersCard user={user} />}</td>
                    </tr>
                  </tbody>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        {Pagination(setPage, page)}
      </div>
    </>
  );
};

export default UserList;
