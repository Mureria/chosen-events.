// import { BrowserRouter, Router, Route } from 'react-router-dom'
import Cta from './components/Cta.tsx'
import Header from './components/Header.tsx'
import Services from './components/Services.tsx'
import Login from './components/pages/Login.tsx'
function App() {

  return (
    
    <>  
      <Header/> 
      <Services/>
      <Cta/>
      <Login/>
    </>
  )
};

export default App
