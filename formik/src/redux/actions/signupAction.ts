import { ActionType } from "../actionTypes/types";
import { Signup } from "./signupType";

export const usersSignup = (signup: Signup) => {
  return {
    type: ActionType.SIGNUP_USERS,
    user: signup,
  };
};

export const usersLogout = () => {
  return {
    type: ActionType.LOGOUT_USERS,
  };
};
