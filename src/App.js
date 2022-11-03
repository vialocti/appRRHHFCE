
import React, {} from 'react'
import './App.css';
import AppRouters from './routes/AppRouters';
import { store } from './store';
import  { Provider } from 'react-redux'



function App() {
  
 
  return (
   
      
    <Provider store={store}>
      
        <AppRouters />
      
    </Provider>
   
   
     );
    
}

export default App;
