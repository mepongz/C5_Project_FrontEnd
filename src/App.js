import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom'

import Players from './app/pages/Players'
import FormPlayer from './app/pages/Players/FormPlayer';

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Players />,
    },
    {
      path: "/add",
      element: <FormPlayer />,
    },
    {
      path: "/edit/:playerid",
      element: <FormPlayer />,
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
