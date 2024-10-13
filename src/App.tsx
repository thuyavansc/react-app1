import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { BsCalendar2DayFill } from "react-icons/bs";

function App() {
  let items = ["New york", "Colombo", "Delhi", "male"];
  let items2 = ["USA", "SriLanka", "India", "UK"];

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <BsCalendar2DayFill color="red" size={40} />
      <Message></Message>
      <br />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        hello <span>World</span>
      </Alert>
      <Button _onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
*/
