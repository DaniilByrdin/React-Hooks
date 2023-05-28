import React from "react"
import { useState } from "react"


export const UseState = () => {

    let [ colorTheme, setStateColor ]  = useState('Gray')
    let [ size, setSize ]  = useState( 14 )
  
    let color = colorTheme === 'black' ? 'white' : 'black' 
    return (
      <div style={ {
        padding: 10,
        backgroundColor: colorTheme,
        fontSize: size,
        color: color,
      } } >
        Hellow World
        <button onClick={ () => setStateColor('black') }> Dark </button>
        <button onClick={ () => setStateColor('gray') }> Gray </button>
        <button onClick={ () => setSize( prev => prev + 2 ) }> + </button>
        <button onClick={ () => setSize( prev => prev - 2 ) }> - </button>
      </div>
    );
  }