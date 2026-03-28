import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ManualMarca from './pages/ManualMarca'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manual-da-marca" element={<ManualMarca />} />
    </Routes>
  )
}
