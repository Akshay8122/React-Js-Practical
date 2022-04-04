import { Signup, Action } from "../actions/signupType";
import { ActionType } from "../actionTypes/types";

const userLoggedin =
  localStorage.getItem("IsLoggedin") === "true" ? true : false;
const userName = localStorage.getItem("userName");
const userPass = localStorage.getItem("userPassword");
const userCpass = localStorage.getItem("userCpassword");
const userEmail = localStorage.getItem("userEmail");
const userPhone = localStorage.getItem("userPhone");
const Image = localStorage.getItem("userImage");

export const userDetails = {
  isLoggedin: userLoggedin,
  name: userName,
  email: userEmail,
  image: Image,
  phoneNo: userPhone,
  password: userPass,
  confirmPassword: userCpass,
};

export const initialState: Signup = {
  image: null,
  name: "",
  email: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  isLoggedin: false,
};

export const signupReducer = (state: Signup = userDetails, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP_USERS:
      return {
        ...state,
        ...action.user,
      };

    case ActionType.LOGOUT_USERS:
      return initialState;

    default:
      return state;
  }
};
