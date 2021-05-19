import './App.css';
import Clock from "./components/Clock";
import Form from "./components/Form";
import Calculator from "./components/Calculator";
import Text from "./components/inheritance/Text";
import CompEmoji from "./components/composition/CompEmoji";
import CompText from "./components/composition/CompText";
import Bracket from "./components/composition/Bracket";
import ClickCounter from "./components/HOC/ClickCounter";
import HoverCounter from "./components/HOC/HoverCounter";

function App() {
    // console.log('app component')
    return (
        <div className="App">
            <Clock/>
            <Form/>
            <h1>------------Lifting State Up------------</h1>
            <Calculator/>
            <h1>------------Composition vs Inheritance------------</h1>
            <Text/>
            <CompEmoji>
                {({addEmoji}) => <CompText addEmoji={addEmoji}/>}
            </CompEmoji>
            <p>Nested composition</p>
            <CompEmoji>
                {({addEmoji}) => (
                    <Bracket>
                        {({addBracket}) => <CompText addEmoji={addEmoji}
                                                     addBracket={addBracket}/>
                        }
                    </Bracket>
                )}
            </CompEmoji>
            <h1>------------Higher ORder Component------------</h1>
            <ClickCounter />
            <HoverCounter />


            <br/> <br/> <br/>
        </div>
    );
}

export default App;
