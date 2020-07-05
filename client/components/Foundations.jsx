import React from 'react'

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
            <>
                <h3>Foundations Contents</h3>
                <p>
                    Blurb about foundations
                </p>
                <p>
                    make pages flash clickable image when hover??
                </p>
                <ul>
                    <li><a href="https://fai-songprasit.github.io/">Blog</a></li>
                    <li><a href="https://fai-songprasit.github.io/minesweeper/">MineSweeper</a></li>
                    <li>Calculator (WORK ON THIS WITH REACT STATE)</li>
                </ul>
            </>
        )
    }
}

export default Foundations