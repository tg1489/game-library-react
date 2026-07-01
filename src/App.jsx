import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Add from './pages/Add.jsx'
import Year from './pages/Year.jsx'
import Records from './pages/Records.jsx'
import WWE from './pages/WWE.jsx'
import Notes from './pages/Notes.jsx'
import './App.css'
import mariobg from './assets/mariobg.png'

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="background" style={{ backgroundImage: `url(${mariobg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', position: 'fixed', top: 0, left: 0, right: 0, bottom: -60, zIndex: -1 }}></div>
      <div className="app-body">
        <Sidebar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/year" element={<Year />} />
            <Route path="/records" element={<Records />} />
            <Route path="/wwe" element={<WWE />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  )
}
