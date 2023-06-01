import { React, createContext } from 'react';

import { UseState } from './useState/usetState'
import { UseEffect } from './useEffect/useEffect';

import { Notification } from './useEffect/useEffect'

import './App.css';

const initContext = {
  data: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.'
}

export const MyContext = createContext();

const App = () => {
  return (
    <div className='container'>
      <MyContext.Provider value={initContext.data}>
        <Notification />
        <div className='container-elements'>
          <UseState />
          <UseEffect />
        </div>
      </MyContext.Provider>
    </div>
  )
}

export default App;
