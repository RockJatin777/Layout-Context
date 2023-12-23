import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationControl = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="cc-container">
          <h1 className="heading">Layout</h1>
          <ul className="lists-container">
            <li className="list">
              <input
                type="checkbox"
                id="checkBox1"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="checkBox1" className="label">
                Content
              </label>
            </li>
            <li className="list">
              <input
                type="checkbox"
                id="checkBox2"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="checkBox2" className="label">
                Left Navbar
              </label>
            </li>
            <li className="list">
              <input
                type="checkbox"
                id="checkBox3"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="checkBox3" className="label">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationControl
