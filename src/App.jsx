import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './Pages/HomePage/HomePage'
import { CrewPage } from './Pages/CrewPage/CrewPage'
import { DestinationPage } from './Pages/DestinationPage/DestinationPage'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/crew" element={<CrewPage/>} />
        <Route path="/destination" element={<DestinationPage />} />
      </Routes>
 

 
    </>
  )
}

export default App;
