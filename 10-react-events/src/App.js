import logo from './logo.svg';
import './App.css';
import WiseSquare from './WiseSquareWithProps';
import AnnoyingForm from './AnnoyingForm';
import CopyDemo from './CopyDemo';
import WiseSquareWithProps from './WiseSquareWithProps';
import ExperimentalSquare from './ExperimentalSquare';

function App() {
  return (
    <div className="App">
        <h1>React Events!</h1>
      <WiseSquare/>
      <AnnoyingForm />
      <CopyDemo />
      <WiseSquareWithProps />
      <ExperimentalSquare />
    </div>
  );
}

export default App;
