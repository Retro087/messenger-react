import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { authAPI } from "./components/api/api";
import { authorized } from "./redux/auth-reducer.ts";
import LoginContainer from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { initialize } from "./redux/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";

function App(props) {
  const dispatch = useDispatch();
  const selector = useSelector((state) => ({
    initialized: state.appReducer.initialized,
  }));

  useEffect(() => {
    dispatch(initialize());
  }, []);

  if (!selector.initialized) {
    return <Preloader />;
  }
  return (
    <div className="App_wrapper">
      <div className="App">
        <HeaderContainer />
        <Sidebar />
        <div className="App_content">
          <Routes>
            <Route path="/profile/:profileId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
