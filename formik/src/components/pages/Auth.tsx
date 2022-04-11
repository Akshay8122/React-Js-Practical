import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { State } from "../../redux/reducers";

const Auth = ({
  children,
  component,
}: {
  children: JSX.Element;
  component: string;
}) => {
  const user = useSelector((state: State) => state.users);
  if (!user.isLoggedin) {
    if (component === "/SignupPage") {
      return <Navigate replace to={component} />;
    } else {
      return children;
    }
  } else {
    if (component === "/home") {
      return <Navigate replace to={component} />;
    } else {
      return children;
    }
  }
};

export default Auth;
