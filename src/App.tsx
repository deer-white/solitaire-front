import * as React from "react";
import "./style/App.css";
import Accordion from "./component/Accordion";
import Board from "./component/Board";
const Greeting = ({ name }: { name: string }) => <h1>Let's start {name}!</h1>;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="DW SOLITAIRE" />
        <Board row={3} col={4} />
        {/* <Accordion preview={<h3>GODORI LICENSE</h3>}>
          SAY THAT GODORI IS COOL!
        </Accordion> */}
      </header>
      />
    </div>
  );
};

export default App;
