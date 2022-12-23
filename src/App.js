import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        111  Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
