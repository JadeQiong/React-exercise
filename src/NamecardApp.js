import logo from './logo.svg';
import './style/namecard.css';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import Name from './components/Name';
import Avatar from './components/Avatar';
import Foot from './components/Foot';

function Clock(props){
  return(
    <div>
      <h1> {props.date.toLocalTimeString()}</h1>
    </div>
  );

}

function tick(){
  ReactDOM.render(
    <Clock date = {new Date()} />,
    document.getElementById(''));
}

function NamecardApp(){
  return (
    <div className='container'>
      <Avatar/>
      <Name/>
      <Info/><Info/>
      <Foot/>
    </div>
  )
}

export default NamecardApp;
