import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import CreatePost from './pages/Create'
import PostDetail from './pages/PostDetail'
import EditPost from './pages/EditPost'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">✦ Blogscape</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link primary">+ New Post</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  )
}

export default App
