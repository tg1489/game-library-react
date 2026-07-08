import './Page.css'

export default function Add() {
  return (
    <section className="page">
      <form id="formid" action="/finished.html" method="POST">
        <div className="add-game">
          <div className="game-input-container">
            <label htmlFor="gameid" className="game-label">
              Game
            </label>
            <input
              type="text"
              id="gameid"
              name="GameName"
              size="15"
              required
              className="game-input"
            />
          </div>
          
          <div className="left-section">
            <div className="demo">
              <div className="demo__title">System</div>
              <div className="demo__content">
              <label htmlFor="switcher1" className="switcher">
                <input
                  id="switcher1"
                  type="checkbox"
                  value="Nintendo"
                  name="Platform"
                />
                <div className="switcher__indicator"></div>
                <span>Nintendo</span>
              </label><br /><br />

                <label htmlFor="switcher2" className="switcher">
                  <input
                    id="switcher2"
                    type="checkbox"
                    value="Super-Nintendo"
                    name="Platform"
                  />
                  <div className="switcher__indicator"></div>
                  <span>Super Nintendo</span> 
                </label><br /><br />

                <label htmlFor="switcher3" className="switcher">
                  <input
                    id="switcher3"
                    type="checkbox"
                    value="SEGA"
                    name="Platform"
                  />
                  <div className="switcher__indicator"></div>
                  <span>Sega</span> 
                </label><br /><br />

                <label htmlFor="switcher4" className="switcher">
                  <input
                    id="switcher4"
                    type="checkbox"
                    value="Arcade"
                    name="Platform"
                  />
                  <div className="switcher__indicator"></div>
                  <span>Arcade</span>
                </label>
              </div>
            </div>

            <button
              className="send-button"
              type="submit"
              name="save_checkbox"
              target="index.html"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}
