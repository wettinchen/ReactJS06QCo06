import React from 'react'
import { useState } from 'react';


const Content = () => {
    const [name, setName] = useState("Dave");
    
    const handleNameChange = () => {
        const names = ["Bob", "Kevin", "Dave"];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    };

    const handleClick = () => {
      console.log("You Clicked it.");
    };

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>

    </main>
  )
}

export default Content