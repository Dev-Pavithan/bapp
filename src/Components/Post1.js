import React from 'react'
import image1 from '../images/JavaScriptTutorial.png'

export default function Post1() {
  return (
    <div>
        <div className="container-1">
            <img  src={image1} alt="./JavaScriptTutorial.png"/>
            <h1>JavaScript </h1>
            <p>JavaScript is a versatile programming language that is primarily used to enhance the interactivity and
                dynamic behavior of websites. It is a key component of modern web development and plays a vital role in
                creating engaging user experiences. JavaScript is a high-level, interpreted programming language that allows developers to add functionality
                to web pages. It was originally created to make websites more interactive by enabling client-side
                scripting, which means that code is executed on the users browser rather than on a remote server.</p>
                <button>Read More</button>
        </div>
    </div>
  )
}
