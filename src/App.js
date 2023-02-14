import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
export const AppContext = createContext(null)

function App() {
  const [appContext,setAppContext] = useState({
    activeTab:"Home",
  })
  const [visitorData,setVisitorData] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  return (
    <BrowserRouter>
        <AppContext.Provider value={{
          appContext, setAppContext,
          visitorData,setVisitorData
          }}>
      <div id="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />

      </div>
    </AppContext.Provider>
    </BrowserRouter>


  );
}

export default App;
