import React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";

import { MyContext } from '../App' 

import './useEffect.css'

export const UseEffect = () => {
    let [BtnLabel, setBtnLabel] = useState(true)
    let [int, setInt] = useState(1)

    const getPlanet = (id) => {
        return fetch(`https://swapi.dev/api/planets/${id}`)
        .then(res => res.json())
        .then(res =>  res )
    }

    const useRequest = ( request ) => {

        const initState = useMemo ( () => ({ 
            data: null,
            loading: true,
            error: null,
        }), [] )
        // кешируем создание обьекта стжйта

        const [ dataState, setDataState] = useState( initState )

        useEffect( () => {
            setDataState( initState )
            let canselled = false

            request()
            .then( (res) => { 
                !canselled && setDataState( {
                    data: res,
                    loading: false,
                    error: null,
                } ) 
            } )
            .catch( err => !canselled && setDataState( {
                data: null,
                loading: false,
                error: err,
            } )) 

            return () => { 
                canselled = true 
            }

        }, [ request, initState ])
        // хук зависит от функции

        return dataState
    }

    const usePlanetInfo = (id) => {   
        const request = useCallback( () => getPlanet( id ), [ id ]  )
        //  каждый раз созаается новая функция 
        return useRequest( request )
    }

    const label = BtnLabel ? 'hide' : 'show'
    const { data, loading, error } = usePlanetInfo( int )


    if (loading) {
        return <div>...Loading</div> 
    }
    if (error) { 
        return (
            <div>
                <ComponentPlanet data = { { int, label, setBtnLabel, setInt } } />
                <div>Error</div>
            </div>
        )
    }

    if (BtnLabel) {
        return (
            <div className="conteiner-elements-useEffect">
                <div className="elements-useEffect-count">
                    <ComponentPlanet data={{ int, label, setBtnLabel, setInt }} />
                </div>
                <div className="elements-useEffect-name">
                    <h1> {data ? data.name : null} </h1>
                    <UseContext />
                </div>
            </div>
        )
    } else { 
        return ( 
            <ComponentPlanet data={{ int, label, setBtnLabel, setInt }} />
        )
    }
}

const UseContext = () => {
    return (
        <MyContext.Consumer>
            { value =>  ( <div>{ `Context - ${ value }`}</div> ) }
        </MyContext.Consumer>
    )    
}

const ComponentPlanet = ( { data } ) => {
    const { int, label, setBtnLabel, setInt } = data
    return (
        <div className="containerBtn">
            <div>
                <button className="countBtn" onClick={() => setBtnLabel(v => !v)} >{label}</button>
                <button className="countBtn" onClick={() => setInt(v => v + 1)} > + </button>
                <button className="countBtn" onClick={() => setInt(v => v > 1 ? v - 1 : 1)} > - </button>
            </div>
            <div>{ int }</div>
        </div>
    )
}


export const Notification = () => {

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
            <div className="notificator">
                Notificator
            </div>
        )
    } else {
        return null
    }
}