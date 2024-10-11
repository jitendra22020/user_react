import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom/client';
import UserDetails from './UserDetails';
import Newuser from './Newuser';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Newuser/>
      <UserDetails/>

    </div>
    
  </React.StrictMode>
);


