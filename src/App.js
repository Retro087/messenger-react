import './app.css';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


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
            </Routes>
          </div>
          
        </div>
      </div>
  );
}

export default App;
