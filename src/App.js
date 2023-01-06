import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import ReactDOM from 'react-dom';

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

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
