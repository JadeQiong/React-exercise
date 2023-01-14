import logo from './logo.svg';
import './travel.css';
import ReactDOM from 'react-dom';
import Navbar from './travel/Navbar';
import Card from './travel/Card';
import travelData from './data/travelData';

const datas = travelData.map(
  function(data){
    return <Card
    {...data}
    />
  }
)

function TravelApp(){
  return (
    <div className='container'>
        <Navbar/>
        {datas}
    </div>
  )
}

export default TravelApp;
