
import './App.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Session from "./pages/Session"

function App() {

  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/session" element={<Session />} />
      </Routes>
  )
}

export default App
