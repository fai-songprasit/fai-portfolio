import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    state = {
        showBurger: false,
      }
    
      toggleBurger = () => {
        this.setState({
          showBurger: !this.state.showBurger
        })
      }

      render() {
        const {showBurger} = this.state
          return (
            <nav className="navbar">
              <div>
                {/* <span onClick={this.toggleBurger} className={`navbar-burger burger ${showBurger ? 'is-active': ''}`} data-target="navbarMenuHeroA">
                    <span></span>
                    <span></span>
                    <span></span>
                </span> */}
                <div className='navbar'>
                    <Link to='/home' className="nav" onClick={this.toggleBurger}>Home</Link>
                    <Link to='/eda' className="nav" onClick={this.toggleBurger}>EDA</Link>
                    <Link to='/solo' className="nav" onClick={this.toggleBurger}>Solo Project</Link>
                </div>
              </div>
            </nav>
        )
    }
}

export default NavBar