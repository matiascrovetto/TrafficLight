import './App.css';
import { useState } from 'react'

function TrafficLight() {
  const [select, setSelect] = useState("green");

  const Interval = () => {
    setInterval(() => {
      setSelect("red");
      setInterval(() => {
        setSelect("green")
        setInterval(() => {
          setSelect("yellow");
          Interval();
        }, 3000);
      }, 3000);
    }, 3000);
  }

  return (
    <div>
      <div className="semaforo" >
        <button
          onClick={() => setSelect("red")}
          id="light" className={"row red" + ((select === "red") ? " onRed" : "")}></button>
        <button
          onClick={() => setSelect("yellow")}
          id="light" className={"row yellow" + ((select === "yellow") ? " onYellow" : "")}></button>
        <button
          onClick={() => setSelect("green")}
          id="light" className={"row green" + ((select === "green") ? " onGreen" : "")}></button>
      </div>
      <div>
        <button onClick={Interval}>
          interval
        </button>
      </div>
    </div>

  );
}


export default TrafficLight;
