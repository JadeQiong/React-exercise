import logo from './logo.svg';
import './airbnb.css';
import ReactDOM from 'react-dom';
import Navbar from './airbnb/Navbar';
import Hero from './airbnb/Hero';
import Card from './airbnb/Card';

function AirbnbApp(){
  return (
    <div className='container'>
    <Navbar/>
    <Hero/>
    <Card/>
    </div>
  )
}

export default AirbnbApp;
