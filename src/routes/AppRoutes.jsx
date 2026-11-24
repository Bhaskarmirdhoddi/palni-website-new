import { Navigate, Route, Routes } from 'react-router-dom'
import { routeList } from '../content/pages'
import ReferencePage from '../pages/ReferencePage'
import BlogPage from '../pages/BlogPage'
import { posts } from '../content/blog'

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
