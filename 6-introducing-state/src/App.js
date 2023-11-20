import './App.css';
import Game from './Game';
import Game2 from './Game2';
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';

function App() {
  return (
    <div className="App">
      <Game />
      <Game2 />
      <Demo animal="Bobcat" food="Pineapple"/>
      <Rando maxNum={7}/>
      <Button />
      <BrokenClick />
    </div>
  );
}

export default App;
