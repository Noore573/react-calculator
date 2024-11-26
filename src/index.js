import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Twtest from './twtest';
import Flextest from './flextest';
import Twtest2 from './twtest2';
import Twtest3 from './twtest3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Twtest></Twtest> */}
    {/* <Flextest/> */}
    <Twtest3/>
  </React.StrictMode>
);

