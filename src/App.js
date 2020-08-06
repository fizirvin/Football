import React from 'react';
import { Provider } from 'react-redux'
import store from './store'

import Players from './components/Players'
import Team from './components/Team'


const App = () =>(
  <Provider store={store}>
    <main>
      <h1>Football Team</h1>
      <Players/>
      <Team/>
    </main>
  </Provider>
)

export default App;
