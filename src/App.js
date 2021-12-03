import './App.css';
import answers from './answers.js'
import EightBall from './EightBall.js'

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
