import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import Form from "./components/Form";

function App() {
    // console.log('app component')
  return (
    <div className="App">
      <Clock />
      <Form />
    </div>
  );
}

export default App;
