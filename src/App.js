import logo from './logo.svg';
import './App.css';
/*import Greeting from './Components/pure/greeting';*/
import GreetingF from './Components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {/*Componente propio greeting.jsx */}
          {/*<Greeting name="Manuel"></Greeting>*/}
          <GreetingF name="Manuel"></GreetingF>
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
