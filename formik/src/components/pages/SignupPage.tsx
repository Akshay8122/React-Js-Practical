import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { Signup } from "../../redux/actions/signupType";
import { validationSchema } from "./Validate";
import { usersSignup } from "../../redux/actions/signupAction";
import { useNavigate } from "react-router";
import { State } from "../../redux/reducers";
import "./SignupPage.css";

const initialValues = {
  image: null,
  name: "",
  email: "",
  phoneNo: "",
  password: "",
  confirmPassword: "",
  isLoggedin: false,
};

const SignupPage: React.FC = () => {
  const user = useSelector((state: State) => state);
  console.log(user);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleSubmit = (values: Signup) => {
    const imgBlob = URL.createObjectURL(values.image as Blob | MediaSource);
    const signUp = {
      name: values.name,
      email: values.email,
      phoneNo: values.phoneNo,
      password: values.password,
      confirmPassword: values.confirmPassword,
      image: imgBlob,
      isLoggedin: true,
    };

    localStorage.setItem("userName", signUp.name);
    localStorage.setItem("userEmail", signUp.email);
    localStorage.setItem("userPhone", signUp.phoneNo as string);
    localStorage.setItem("userImage", signUp.image);
    localStorage.setItem("IsLoggedin", JSON.stringify(signUp.isLoggedin));

    dispatch(usersSignup(signUp));
    navigation("/home", { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values: Signup) => handleSubmit(values)}
    >
      {({ setFieldValue }) => (
        <div className="wrapper">
          <div>
            <Form>
              <div>
                <h1>SignUp</h1>
              </div>
              <div>
                <label className="upload" htmlFor="image">
                  Photo +
                </label>
                <input
                  type="file"
                  name="photo"
                  id="image"
                  onChange={(event) => {
                    setFieldValue("image", event.target.files![0]);
                  }}
                />

                <div className="error">
                  <ErrorMessage name="image" />
                </div>
              </div>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <div className="error">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />

                <div className="error">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="phoneNo">PhoneNo</label>
                <Field
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
                  placeholder="+91"
                />
                <div className="error">
                  <ErrorMessage name="phoneNo" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <div className="error">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div className="form-control">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <div className="error">
                  <ErrorMessage className="error" name="confirmPassword" />
                </div>
              </div>

              <div className="button-control">
                <button className="submit" type="submit">
                  Submit
                </button>
                <button className="reset" type="reset">
                  Reset
                </button>
              </div>
            </Form>
          </div>
          <div>
            <img
              className="img-control"
              src="https://squahr.com/assets/images/authentication/signup.png"
              alt=""
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignupPage;
