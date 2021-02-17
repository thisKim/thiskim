import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          create-react-app deployed on AWS Amplify
        </p>
        <a
          className="App-link"
          href="https://main.d3t2c2hwvox1ma.amplifyapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed APP
        </a>
      </header>
    </div>
  );
}

export default App;
