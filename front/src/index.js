import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'
import './index.scss'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as Icons from '@fortawesome/free-solid-svg-icons';
import App from './App';

// const iconList = Object
//   .keys(Icons)
//   .filter(key => key !== "fas" && key !== "prefix" )
//   .map(icon => Icons[icon])

// library.add(...iconList)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)