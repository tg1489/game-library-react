import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import banner from '../assets/banner.png'

const tabs = [
  { label: 'Home', path: '/' },
  { label: 'Add', path: '/add' },
  { label: 'Year', path: '/year' },
  { label: 'Records', path: '/records' },
  { label: 'WWE', path: '/wwe' },
  { label: 'Notes', path: '/notes' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header-greeting">
        Hello James, for England...
      </div>
      <div className="header-logo">
        <Link to="/" className="header-banner-link">
          <img src={banner} alt="Game Library" className="header-banner-img" />
        </Link>
      </div>
      <nav className="header-tabs">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
