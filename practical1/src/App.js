import logo from './logo.svg';
import './App.css';

function App() {
  const Message = {
    color: "rgb(97, 218, 251)",
    fontSize:"42px",
    textShadow :" 1px 2px white",
    fontStyle:"italic",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={Message}> Hello World </h2>
      </header>
    </div>
  );
}

export default App;



