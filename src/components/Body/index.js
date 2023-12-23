import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="navbar">
              <ul className="lists-container">
                <h1>Left Navbar Menu</h1>
                <li className="lists"> item 1</li>
                <li className="lists"> item 2</li>
                <li className="lists"> item 3</li>
                <li className="lists"> item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1>Content</h1>
              <p className="content-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                euismod tampor incididunt ut labore et dolore magna alequa. Ut
                enim ad minim vaniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <nav className="navbar">
              <h1>Right Navbar Menu</h1>
              <ul className="lists-container">
                <li className="right-list"> Ad 1</li>
                <li className="right-list"> Ad 2</li>
              </ul>
            </nav>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
