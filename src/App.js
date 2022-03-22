import logo from './logo.svg';
import './index.css';
import TopBar from './Components/TopBar';
import ColoredButton from './Components/ColoredButton';
import LockedButton from './Components/LockedButton';
import {useState} from 'react';




function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <TopBar/>
      <div className="button-container">
      <ColoredButton count={count} setCount={setCount}/>
      <LockedButton count={count}/>
      </div>
    </div>
  );
}

export default App;
