import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import Form from "./components/Form";
import Calculator from "./components/Calculator";

function App() {
    // console.log('app component')
  return (
    <div className="App">
      <Clock />
      <Form />
      <h1>------------Lifting State Up------------</h1>
      <Calculator />
    </div>
  );
}

export default App;
