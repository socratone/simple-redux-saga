import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const handleClick = () => {
    dispatch({ type: 'INCREMENT_ASYNC' })
  }

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
