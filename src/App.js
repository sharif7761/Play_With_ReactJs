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
import ClickCounterHoc from "./components/HOC/ClickCounterHoc";
import HoverCounterHoc from "./components/HOC/HoverCounterHoc";
import ClickCounterRP from "./components/render_props/ClickCounterRP";
import HoverCounterRP from "./components/render_props/HoverCounterRP";
import Counter from "./components/render_props/Counter";

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
             <h3>Normal compnent</h3>
            <ClickCounter />
            <HoverCounter />
            <h3>Using HOC</h3>
            <ClickCounterHoc />
            <HoverCounterHoc />
            <h1>------------Render Props------------</h1>
            <Counter render={(count, incrementCount) => (
                <ClickCounterRP count={count} incrementCount={incrementCount} />
                )}
            />
                <Counter render={(count, incrementCount) => (
                    <HoverCounterRP count={count} incrementCount={incrementCount} />
                )}
                />


            <br/> <br/> <br/>
        </div>
    );
}

export default App;
