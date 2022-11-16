import logo from './logo.svg';
import './App.css';
import Clock_rcc from './components/clock_rcc';
import ClockRfc from './components/clock_rfc';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockRfc/>
      </header>
    </div>
  );
}

export default App;
