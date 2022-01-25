import StateTutorial from './hookComponents/StateTutorial';
import ReducerTutorial from './hookComponents/ReducerTutorial';
import EffectTutorial from './hookComponents/EffectTutorial';
import RefTutorial from './hookComponents/RefTutorial';
import './App.css';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
    </div>
  );
}

export default App;
