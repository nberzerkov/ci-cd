import {useState} from "react";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => prev + 1);

    return (
        <div className="App">
            <h1 style={{fontSize: 70, color: 'red'}}>value = {state}</h1>
            <button
                style={{background: 'white', color: "black", padding: 30}}
                onClick={increment}
            >
                inc by +1
            </button>
        </div>
    );
}

export default App;
