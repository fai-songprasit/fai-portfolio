import React from 'react'
import Blog from './Blog'
import Minesweeper from './Minesweeper'

class Foundations extends React.Component {
    state = {
        clicked: false,
    }

    handleClick = (e) => {
        if (this.state.clicked == true) {
            this.setState ({
                clicked: false
            })
        } else if (this.state.clicked == false) {
            this.setState ({
                clicked: true
            })
        }
    }
    render() {
        return (
            <div className="container">
                <div className="list">
                    <div className="text">
                        <p className="hover">
                            <a name="Blog" onClick={this.handleClick}>Blog</a>
                        </p>
                        <p className="hover">
                            <a name="MS" onClick={this.handleClick}>Minesweeper</a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        {/* may need to use onclick in all the components to get it to work */}
                        {this.state.clicked ? 
                            <div>
                                <Blog data={this.state.name}/>
                                <Minesweeper data={this.state.name}/>
                            </div> 
                            : <div>
                                <h3>Foundations Contents</h3>
                                    <p>
                                    Blurb about foundations
                                    </p>
                                    <p>
                                        make pages flash clickable image when hover??
                                    </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Foundations