import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);
  }, []);

  function getFormattedTime() {
    const d = new Date();
    const hour = addZero(d.getHours());
    const minute = addZero(d.getMinutes());
    const second = addZero(d.getSeconds());
    return `${hour}:${minute}:${second}`;
  }

  function addZero(i) {
    if (i < 10) i = "0" + i;
    return i;
  }

  return (
    <>
      <h1>Relógio Digital</h1>
      <div className="timer">{time}</div>
    </>
  );
}
