import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { redirects } from '../../vercel.json'
import { routeList } from '../content/pages'
import ReferencePage from '../pages/ReferencePage'
import BlogPage from '../pages/BlogPage'
import { posts } from '../content/blog'

function Redirect({ to }) {
  const { search, hash } = useLocation()
  return <Navigate to={{ pathname: to, search, hash }} replace />
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/page/:number" element={<BlogPage />} />
      {posts.map(post => (
        <Route key={post.path} path={post.path} element={<BlogPage post={post} />} />
      ))}
      {routeList.map(({ path, page }) => (
        <Route key={path} path={path} element={<ReferencePage page={page} />} />
      ))}
      {redirects.map(({ source, destination }) => (
        <Route key={source} path={source} element={<Redirect to={destination} />} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
