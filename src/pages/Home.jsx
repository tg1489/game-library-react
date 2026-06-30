import './Banner.css'
import ZeldaLinks from '../components/ZeldaLinks.jsx'

export default function Home() {
  return (
    <div className="home">
      <section className="banner">
        <div className="banner-images">
          <img src="" alt="banner image 1" className="banner-img" />
          <img src="" alt="banner image 2" className="banner-img" />
          <img src="" alt="banner image 3" className="banner-img" />
          <a href="#" className="banner-link">
            <div className="banner-link-content">
              <span className="banner-link-icon">&#8595;</span>
              <span>ROMS</span>
            </div>
          </a>
        </div>
      </section>
      <ZeldaLinks />
    </div>
  )
}
