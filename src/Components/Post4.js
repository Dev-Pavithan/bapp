import React from 'react'
import image4 from '../images/ComputerNetwork.jpeg'

export default function Post4() {
  return (
    <div>
        <div className="container-4">
            <img src={image4} alt="./ComputerNetwork.jpeg"/>
            <h1>Computer Network</h1>
            <p>It is the interconnection of multiple devices, generally termed as Hosts connected using multiple paths
                for the purpose of sending/receiving data or media.
                There are also multiple devices or mediums which help in the communication between two different devices
                which are known as Network devices. Ex: Router, Switch, Hub, Bridge.</p>
                <button>Read More</button>
        </div>
    </div>
  )
}
