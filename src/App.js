import { React, createContext } from 'react';

import { UseState } from './useState/usetState'
import { UseContext } from './useContext/useContext';
import { UseEffect } from './useEffect/useEffect';

import { Notification } from './useEffect/useEffect'

import './App.css';

const initContext = {
  data: [ 1, 2, 3, 4, 5 ]
}

export const MyContext = createContext();

const App = () => {
  return (
    <MyContext.Provider value={ initContext.data }>
      <Notification />
      <div>
        <UseState />
        <UseContext />
        <UseEffect />
      </div>
    </MyContext.Provider>
  )
}

export default App;
