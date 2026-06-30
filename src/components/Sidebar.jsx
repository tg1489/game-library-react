import { useState } from 'react'
import './Sidebar.css'

const gameIdeas = [
  { label: 'Nintendo', href: '#' },
  { label: 'Super Nintendo', href: '#' },
  { label: 'Sega', href: '#' },
  { label: 'Arcade', href: '#' },
  { label: 'Nintendo 64', href: '#' },
]

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search:', searchQuery)
  }

  return (
    <aside className="sidebar">
      <form className="sidebar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <section className="sidebar-section">
        <h2 className="sidebar-section-title">Game Ideas</h2>
        <ul className="sidebar-list">
          {gameIdeas.map((idea) => (
            <li key={idea.label}>
              <a href={idea.href}>{idea.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
