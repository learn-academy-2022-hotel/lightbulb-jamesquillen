import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"

const App = () => {

  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <h2>Click a switch below to turn the light on and off.</h2>
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
      <LightSwitch />
    </>
  )
}

export default App
