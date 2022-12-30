import React, { useState } from "react"
import LightSwitch from "./LightSwitch"

let LightMaker = () => {
    const [numberLights, setNumberLights] = useState([])

    const addLight = () => {
        setNumberLights([...numberLights, numberLights.length + 1])
    }

    const removeLight = () => {
        setNumberLights(numberLights.slice(0, numberLights.length - 1))
    }

    return (
        <>
        <h2>Click the buttons below to add or remove a switch and light, then click the switch to turn the light on or off.</h2>
        <div className="center">
            <button onClick={addLight}>Add a light</button>
            <button onClick={removeLight}>Remove a light</button>
        </div>
        {numberLights.map((value, index) => 
            <div key={index} className="center">
                <LightSwitch />
            </div>)
            }
        </>
    )
}

export default LightMaker