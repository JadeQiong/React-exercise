import logo from './logo.svg';
import './airbnb.css';
import ReactDOM from 'react-dom';
import Navbar from './airbnb/Navbar';
import Hero from './airbnb/Hero';
import Card from './airbnb/Card';
import airbnbData from './airbnbData';

const cards =airbnbData.map(
  function(data){
    return (
    <Card 
    key={data.id}
    img={data.coverImg}
    rating={data.stats.rating}
    reviewCount={data.stats.reviewCount}
    location={data.location}
    title={data.title}
    price={data.price}
    openSpots={data.openSpots}
    />
  )}
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
