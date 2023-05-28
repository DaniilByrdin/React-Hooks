import React from "react";
import { MyContext } from '../App'

export const UseContext = (props) => {
    return (
        <MyContext.Consumer>
            { value =>  ( <h1>{ `Context: ${ value }`}</h1> ) }
        </MyContext.Consumer>
    )    
}
