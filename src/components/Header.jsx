import { NavLink } from 'react-router-dom'
import './Header.css'

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
        <div className="header-logo-left">
          <img src="" alt="left character" />
        </div>
        <h1 className="header-title">Game Library</h1>
        <div className="header-logo-right">
          <img src="" alt="right character" />
        </div>
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
