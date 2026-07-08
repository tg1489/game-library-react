import './Banner.css'
import geniebeta from '../assets/geniebeta.png'
import gs from '../assets/gs.png'
import romdl from '../assets/romdl.png'
import charizardsprite from '../assets/charizardsprite.png'

export default function Home() {
  return (
    <div className="home">
      <div className="random-zone">
        <div className="div-genie">
          <a href="https://www.gamegenie.com/" target="_blank" rel="noreferrer">
            <img className="genie-img" src={geniebeta} alt="Game Genie" width="130" height="126" />
          </a>
        </div>
        <div className="div-shark">
          <a href="https://gamehacking.org/" target="_blank" rel="noreferrer">
            <img className="game-shark-img" src={gs} alt="Game Shark" width="150" height="93" />
          </a>
        </div>
        <div className="div-pokemon">
          <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number" target="_blank" rel="noreferrer">
            <img className="charizard-img" src={charizardsprite} alt="Charizard" width="100" height="100" />
          </a>
        </div>
        <div className="div-rom">
          <a href="https://wowroms.com" target="_blank" rel="noreferrer">
            <img className="rom-download-img" src={romdl} alt="ROM Downloads" width="200" height="200" />
          </a>
        </div>
      </div>
    </div>
  )
}
