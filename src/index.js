import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderTree = () => {
  root.render(
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>

  );
}

renderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderTree(state)
})