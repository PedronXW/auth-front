import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'

export const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<div>Não tem</div>} />
      <Route path="/" element={<Register />} />
    </Routes>
  )
}
