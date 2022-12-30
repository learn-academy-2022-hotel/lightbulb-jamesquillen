import React, { useState } from "react"

const LightSwitch = () => {

  // Declare a constant and state for the light switch
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  // Declare a constant and state for the box color
  const [boxColor, setBoxColor] = useState("white")

  // Declare a function that checks to see the state of the switch. If the switch is off, change it to on. Otherwise, switch it to off. In the same function, check to see what the color of the box is. If the box color is white, change it to yellow. Otherwise, change it to white.
  const flipSwitch = (e) => {
    setLightSwitchStatus(lightSwitchStatus === "off" ? "on" : "off");
    setBoxColor(boxColor === "white" ? "yellow" : "white")
  }

  return (

    // If the div is clicked, run the flipSwitch function. The inline styling {backgroundColor boxColor} will change the background color from white to yellow depending on the current background color. The text contents of the div {lightSwitchStatus} will change base on the current text. Because the default values are set, the color and text will always change back and forth together with each click.
    <>
      <div
      className="lightbulb"
      onClick={flipSwitch}
      style={{ backgroundColor: boxColor}}
      >{lightSwitchStatus}</div>
    </>
  )
}

export default LightSwitch
