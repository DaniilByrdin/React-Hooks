import React from 'react';
import  { UseState }  from './useState/usetState';
import { UseContext } from './useContext/useContext'
import { UseEffect } from './useEffect/useEffect'

import './App.css';

const initContext = {
  data: [ 1, 2, 3, 4, 5 ]
}

export const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value={ initContext.data }>
      <div>
        <UseState />
        <UseContext />
        <UseEffect />
      </div>
    </MyContext.Provider>
  )
}

export default App;
