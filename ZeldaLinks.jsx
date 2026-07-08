import './ZeldaLinks.css'
import G01 from '../assets/G01.png'
import G02 from '../assets/G02.png'
import G03 from '../assets/G03.png'
import G04 from '../assets/G04.png'
import G05 from '../assets/G05.png'
import G06 from '../assets/G06.png'
import G07 from '../assets/G07.png'
import G08 from '../assets/G08.png'
import G09 from '../assets/G09.png'
import G10 from '../assets/G10.png'
import G11 from '../assets/G11.png'
import G12 from '../assets/G12.png'
import G13 from '../assets/G13.png'
import G14 from '../assets/G14.png'
import G15 from '../assets/G15.png'
import G15a from '../assets/G15a.png'
import G16 from '../assets/G16.png'
import G17 from '../assets/G17.png'

const zeldaGames = [
  { title: 'The Legend of Zelda', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda', img: G01, alt: 'zelda1' },
  { title: 'Zelda II: The Adventure of Link', url: 'https://zelda.fandom.com/wiki/Zelda_II:_The_Adventure_of_Link', img: G02, alt: 'zelda2' },
  { title: 'The Legend of Zelda: A Link to the Past', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past', img: G03, alt: 'lttp' },
  { title: 'The Legend of Zelda: Link\'s Awakening', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Link%27s_Awakening', img: G04, alt: 'awakening' },
  { title: 'The Legend of Zelda: Ocarina of Time', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Ocarina_of_Time', img: G05, alt: 'oot' },
  { title: 'The Legend of Zelda: Majora\'s Mask', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Majora%27s_Mask', img: G06, alt: 'mm' },
  { title: 'The Legend of Zelda: Oracle of Seasons', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Oracle_of_Seasons', img: G07, alt: 'seasons' },
  { title: 'The Legend of Zelda: Oracle of Ages', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Oracle_of_Ages', img: G08, alt: 'ages' },
  { title: 'The Legend of Zelda: The Wind Waker', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_The_Wind_Waker', img: G09, alt: 'ww' },
  { title: 'The Legend of Zelda: The Minish Cap', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_The_Minish_Cap', img: G10, alt: 'minish' },
  { title: 'The Legend of Zelda: Twilight Princess', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Twilight_Princess', img: G11, alt: 'tp' },
  { title: 'The Legend of Zelda: Phantom Hourglass', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Phantom_Hourglass', img: G12, alt: 'hourglass' },
  { title: 'The Legend of Zelda: Spirit Tracks', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Spirit_Tracks', img: G13, alt: 'tracks' },
  { title: 'The Legend of Zelda: Skyward Sword', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Skyward_Sword', img: G14, alt: 'ss' },
  { title: 'The Legend of Zelda: A Link Between Worlds', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_A_Link_Between_Worlds', img: G15, alt: 'linkbetweenworlds' },
  { title: 'The Legend of Zelda: Breath of the Wild', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild', img: G16, alt: 'botw', className: 'botw' },
  { title: 'The Legend of Zelda: Tears of the Kingdom', url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Tears_of_the_Kingdom', img: G17, alt: 'next', className: 'next-zelda' },
]

export default function ZeldaLinks() {
  return (
    <section className="zelda-links">
      <h2 className="links">Zelda Links</h2>
      <div className="zelda-links-grid">
        {zeldaGames.map((game) => (
          <a key={game.title} href={game.url} target="_blank" className="zelda-link">
            <img src={game.img} alt={game.alt} className={`zelda-link-img ${game.className || ''}`} />
          </a>
        ))}
      </div>
    </section>
  )
}
