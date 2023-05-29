import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const UseEffect = () => {
    let [ BtnLabel, setBtnLabel] = useState(true)
    let [ int , setInt ] = useState( 0 )
    const label = BtnLabel ? 'hide' : 'show' 

    useEffect( () => {
        console.log('Mount');
        return () => {
            console.log('Unmount');
        }
    }, [ BtnLabel ] )


    if (BtnLabel) {
        return (
            <div>
                <button onClick={() => setBtnLabel(v => !v)} >{label}</button>
                <button onClick={ () => setInt( v => v + 1 ) } > + </button>
                <button onClick={ () => setInt( v => v - 1 ) } > - </button>
                <ComponentCount value = { int } />
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => setBtnLabel(v => !v)} >{label}</button>
            </div>
        )
    }
}

const ComponentCount = ( { value } ) => {
    return ( 
        <>
            <h1> { value } </h1>
        </>
    )
}