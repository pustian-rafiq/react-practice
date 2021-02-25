
 
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Props from './components/Props'
import Arrow from './components/Arrow'
import StateComponent from './components/StateComponent'
import Condition from './components/Condition'
function App() {
  return (
    <div className="App">
       <FunctionalComponent></FunctionalComponent>
       <ClassComponent></ClassComponent>
       <Props name="Rafiqul" age="24"></Props>
        
        <Arrow></Arrow>
        <StateComponent></StateComponent>
        <Condition></Condition> 
    </div>
  );
}

export default App;
