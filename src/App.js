
 
import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Props from './components/Props'

function App() {
  return (
    <div className="App">
       <FunctionalComponent></FunctionalComponent>
       <ClassComponent></ClassComponent>
       <Props name="Rafiqul" age="24"></Props>
       <Props name="Ruma" age="20"></Props>
       <Props name="Rabiul" age="29"></Props>
       <Props name="Kamrunnahar" age="21"></Props>
    </div>
  );
}

export default App;
