import logo from './logo.svg';
import './style/airbnb.css'
import ReactDOM from 'react-dom';
import Navbar from './airbnb/Navbar';
import Hero from './airbnb/Hero';
import Card from './airbnb/Card';
import airbnbData from './data/airbnbData';

const cards =airbnbData.map(
  function(data){
    return (
    <Card 
      key={data.id}
      {...data}
    />
    )
  }
);

function AirbnbApp(){
  return (
    <div className='container'>
    <Navbar/>
    <Hero/>
    <section className='cards-list'>
    {cards}
    </section>

    </div>
  )
}

export default AirbnbApp;
