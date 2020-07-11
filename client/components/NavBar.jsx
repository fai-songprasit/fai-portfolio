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
            <div className='navbar'>
                <Link to='/home' className="nav" onClick={this.toggleBurger}>Home</Link>
                <Link to='/eda' className="nav" onClick={this.toggleBurger}>EDA-Foundations</Link>
                <Link to='/bootcamp' className="nav" onClick={this.toggleBurger}>EDA-Bootcamp</Link>
                <Link to='/solo' className="nav" onClick={this.toggleBurger}>Solo Projects</Link>
            </div>
        )
    }
}

export default NavBar