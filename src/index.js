import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PrimaryNav from './Components/Nav/PrimaryNav'
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./fonts/sk-akademkniga-trial.ttf"

ReactDOM.render(
  <React.StrictMode>
    <PrimaryNav />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
