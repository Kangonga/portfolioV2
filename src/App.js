import { createContext, useState } from 'react';


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
    <AppContext.Provider value={{appContext, setAppContext}}>
      <div id="App">
      <NavBar />
      <Home />
      <About />
    </div>
    </AppContext.Provider>

  );
}

export default App;
