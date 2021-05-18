import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import Form from "./components/Form";
import Calculator from "./components/Calculator";
import Text from "./components/inheritance/Text";
import CompEmoji from "./components/composition/CompEmoji";
import CompText from "./components/composition/CompText";

function App() {
    // console.log('app component')
  return (
    <div className="App">
      <Clock />
      <Form />
      <h1>------------Lifting State Up------------</h1>
      <Calculator />
        <h1>------------Composition vs Inheritance------------</h1>
        <Text />
        <CompEmoji>
            {({addEmoji}) => <CompText addEmoji={addEmoji} />}
        </CompEmoji>
    </div>
  );
}

export default App;
