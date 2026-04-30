import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import CreatePost from './pages/Create.jsx'
import PostDetail from './pages/PostDetail.jsx'
import EditPost from './pages/EditPost.jsx'
import './index.css'
import './App.css'

function App() {
  return (
    <div className="app-layout">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">✦ Blogscape</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/create" className="nav-link primary">+ New Post</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  )
}


export default App
