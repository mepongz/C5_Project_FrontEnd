import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom'

import Players from './app/pages/Players'


const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Players />,
    },
    
  ]);

  return element
}

function App() {
  return (
    <Router>
       <div className="App">
          <Routes />
      </div>
    </Router>
  );
}

export default App;
