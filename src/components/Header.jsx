import { NavLink, Link } from 'react-router-dom'
import './Header.css'
import banner from '../assets/banner.png'

const tabs = [
  { label: 'Home', path: '/', cls: 'nav-button' },
  { label: 'Add', path: '/add', cls: 'nav-button' },
  { label: 'Year', path: '/year', cls: 'nav-button' },
  { label: 'Records', path: '/records', cls: 'nav-button' },
  { label: 'WWE', path: '/wwe', cls: 'nav-button' },
  { label: 'Notes', path: '/notes', cls: 'nav-button' },
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
            style={{ textDecoration: 'none' }}
            className={({ isActive }) => `${tab.cls} ${isActive ? 'tab-active' : ''}`}
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
