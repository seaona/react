import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHooks from './SimpleFormInputHooks';
import Clicker from './Clicker';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      <CounterClass />
      <CounterHooks />
      <Toggler />
      <SimpleFormHooks />
      <SimpleFormInputHooks />
      <Clicker />
      <SWMovies />
    </div>
  );
}

export default App;
