import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './responsive.css'
import reportWebVitals from './reportWebVitals';
import Navigation from './Partials/Navigation';
import Footer from './Components/Footer/Footer'
import "./fonts/sk-akademkniga-trial.ttf"

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
