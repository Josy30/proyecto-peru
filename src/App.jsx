import { useState } from 'react'
import './App.scss'
import { HomePage } from './Pages/HomePage/HomePage'
import { GastronomyPage} from './Pages/GastronomyPage/GastronomyPage'
import { DestinationsPage } from './Pages/DestinationsPage/DestinationsPage'
import { ClimatePage } from './Pages/ClimatePage/ClimatePage'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/gastronomy" element={<GastronomyPage/>} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/climate" element={<ClimatePage />} />
      </Routes>
    
    </div>
  )
}

export default App;
