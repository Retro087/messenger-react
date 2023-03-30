import './app.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import {Route, Routes} from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {
  return (
      <div className='App_wrapper'>
        <div className="App">
          <Header />
          <Sidebar />
          <div className='App_content'>
            <Routes>
              <Route path='/Profile/*' element={<Profile store={props.store}/>}/>
              <Route path='/Dialogs/*' element={<DialogsContainer store={props.store}/>}/>
            </Routes>
          </div>
          
        </div>
      </div>
  );
}

export default App;