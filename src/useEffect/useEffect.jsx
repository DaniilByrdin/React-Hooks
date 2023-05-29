import React from "react";
import { useEffect } from "react";
import { useState } from "react";



export const UseEffect = () => {
    let [ BtnLabel, setBtnLabel] = useState(true)
    let [ int , setInt ] = useState( 1 ) 

    let [ planet, setPlanet ] = useState()
    let [ disBtn, setDisBtn ] = useState( false )

    useEffect( () => {

        setDisBtn( v => !v )

        let canselled = false

        fetch( `https://swapi.dev/api/planets/${int}` )
        .then( res => res.json() )
        .then( res => { 
            // !canselled && setPlanet( res.name )
            setPlanet( res.name )
            setDisBtn( v => !v )
        } )

        // return () => canselled = true  
    }, [ int ] )

    const label = BtnLabel ? 'hide' : 'show'

    if (BtnLabel) {
        return (
            <div>
                <button onClick={() => setBtnLabel(v => !v)} >{label}</button>
                <button disabled = { disBtn } onClick={ () => setInt( v => v + 1 ) } > + </button>
                <button disabled = { disBtn } onClick={ () => setInt( v => v > 1 ? v - 1 : 1 ) } > - </button>
                <ComponentCount value = { int } />
                <Notification />
                <h1> { planet } </h1>
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

    useEffect( () => {
        console.log('Mount')
        return () => console.log('Unmount'); 
    }, [] )

    useEffect( () => {
        console.log('UpdateComponent') 
    })

    return (
        <h1> {value} </h1>
    )
}

const Notification = () => {

    const [ visible, setVisible ] = useState(true)

    useEffect( () => { 
        let timer = setTimeout( () => { 
            setVisible( false )
        }, 5000 )

        return () => { 
            clearTimeout( timer )
        }
    }, [] )

    if(visible) {
        return (
            <div>
                Notificator
            </div>
        )
    } else {
        return null
    }
}