import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About';

export const AppContext = createContext(null)

function App() {
  const [appContext,setAppContext] = useState({
    activeTab:"Home",
  })
  return (
    <BrowserRouter>
        <AppContext.Provider value={{appContext, setAppContext}}>
      <div id="App">
      <NavBar />
      <Home />
      <About />
      </div>
    </AppContext.Provider>
    </BrowserRouter>


  );
}

export default App;
