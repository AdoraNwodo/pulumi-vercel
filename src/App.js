import logo from './logo.svg';
import './App.css';

function App() {
  const sayHello = () => {
    alert("Hello, welcome to my app!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! Welcome to a sample React app we would deploy to Vercel
        </p>
        <button
          onClick={sayHello}
          className="App-button"
        >
          What does this button do?
        </button>
      </header>
    </div>
  );
}

export default App;
