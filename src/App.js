import './app.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { authAPI } from './components/api/api';
import { authorized } from './redux/auth-reducer';
import LoginContainer from './components/Login/Login';


function App(props) {
  return (
      <div className='App_wrapper'>
        <div className="App">
          <HeaderContainer />
          <Sidebar />
          <div className='App_content'>
            <Routes>
              <Route path='/profile/:profileId' element={<ProfileContainer/>}/>
              <Route path='/profile/*' element={<ProfileContainer/>}/>
              <Route path='/dialogs/*' element={<DialogsContainer/>}/>
              <Route path='/users/*' element={<UsersContainer/>}/>
              <Route path='/login' element={<LoginContainer/>}/>
            </Routes>
          </div>
          
        </div>
      </div>
  );
}

export default App;
