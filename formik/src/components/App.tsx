import "./App.css";
import Auth from "./pages/Auth";
import SignupPage from "./pages/SignupPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/SignupPage"
            element={
              <Auth component={"/home"}>
                <SignupPage />
              </Auth>
            }
          />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route
            path="/home"
            element={
              <Auth component={"/SignupPage"}>
                <HomePage />
              </Auth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
