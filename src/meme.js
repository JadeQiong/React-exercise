import logo from './logo.svg';
import './style/meme.css';
import ReactDOM from 'react-dom';
import Header from './meme/Header'
import Meme from './meme/Meme';

function MemeApp(){
  return (
    <div className='container'>
        <Header/>
        <Meme/>
    </div>
  )
}

export default MemeApp;
