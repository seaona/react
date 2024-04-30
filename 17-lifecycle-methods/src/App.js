import './App.css';
import Timer from './Timer';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      <GithubUserInfo username="facebook"/>
      <GithubUserInfo username="colt"/>
    </div>
  );
}

export default App;
