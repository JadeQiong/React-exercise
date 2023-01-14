import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NamecardApp from './NamecardApp'; 
import reportWebVitals from './reportWebVitals';
import AirbnbApp from './airbnbApp';
import TravelApp from './travelApp';

const root = document.getElementById('root');

ReactDOM.render(<TravelApp/>, root);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
