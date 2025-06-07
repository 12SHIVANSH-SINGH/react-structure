import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Wyvern from "./components/Wyvern";
// default if user did not passed any props
function App() { // destructuring of props

  return (
    <>
     <Wyvern name="Varkaleth" quote="In the scorched echoes of forgotten wars, Varkaleth flew—its breath not of fire, but of hatred refined by centuries of silence."/>
      <Wyvern name="Syrrhakor" quote="Where winds weep and thunder kneels, there soars Syrrhakor, and none who hear its cry live to tell of it.."/>
    </>
  );
}

export default App;

// in this manner by suitable prop destructuring and using the value using suitable component we can display the cards and render multiple oontext using single component and prop values passing down the dom tree to the children