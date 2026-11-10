import { Navigate, Route, Routes } from 'react-router-dom'
import { routeList } from '../content/pages'
import ReferencePage from '../pages/ReferencePage'

export default function AppRoutes() {
  return (
    <Routes>
      {routeList.map(({ path, page }) => (
        <Route key={path} path={path} element={<ReferencePage page={page} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
