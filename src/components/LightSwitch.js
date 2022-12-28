import React, { useState } from "react"
import lightOff from "../assets/lightOff.png"
import lightOn from "../assets/lightOn.png"
import switchOff from "../assets/switchOff.png"
import switchOn from "../assets/switchOn.png"


const LightSwitch = () => {

  // Declare a constant and state for the light switch
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")

  // Declare a function that checks to see the state of the switch. If the switch is off, change it to on. Otherwise, switch it to off.
  const flipSwitch = (e) => {
    setLightSwitchStatus(lightSwitchStatus === "off" ? "on" : "off");
  }

  return (

    // If the switch image clicked, run the flipSwitch function. If the lightSwitch state is "off", the switchOff image will be displayed along with the lightOff image. When the lighSwitch state changes to "on", both the switch and light images will change.
    <>
      <div>
        <img src={lightSwitchStatus === "off" ? switchOff : switchOn} onClick={flipSwitch} />
        <img src={lightSwitchStatus === "off" ? lightOff : lightOn} />
      </div>
    </>
  )
}

export default LightSwitch
