import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function App() {
  function handleClick() {
    console.log("click");
  }

  return <Clickable onClick={handleClick} />;
}

export default App;
