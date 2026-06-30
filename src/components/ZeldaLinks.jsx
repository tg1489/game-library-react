import './ZeldaLinks.css'

const zeldaGames = [
  'Ocarina of Time',
  'Adventure of Link',
  "A Link To The Past",
  "Link's Awakening",
  'Majora\'s Mask',
  'The Wind Waker',
  'Twilight Princess',
  'Breath of the Wild',
  'Tears of the Kingdom',
]

export default function ZeldaLinks() {
  return (
    <section className="zelda-links">
      <h2 className="zelda-links-title">Zelda Links</h2>
      <div className="zelda-links-grid">
        {zeldaGames.map((game) => (
          <a key={game} href="#" className="zelda-link">
            <div className="zelda-link-img" />
            <span className="zelda-link-label">{game}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
