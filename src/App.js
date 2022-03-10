import './App.css';
import React from 'react';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
import UserList from './component/home/UserList';
import UserDetail from './component/detail/UserDetail';
function App() {
  return ReactDOM.render(
    <Router>
      <div>
        <Route exact path="/">
          <UserList />
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
