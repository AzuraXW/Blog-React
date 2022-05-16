import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from './pages/Index'
import Header from './widgets/Header'
import Tag from './pages/Tag'
import Article from './pages/Article'
import About from './pages/About'
import Search from './pages/Search'
import Footer from './widgets/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tag" element={<Tag />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
