import React from 'react'

class SoloProject extends React.Component {
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
                <h2>Solo project</h2>
                    <p>
                        Blurb about solo work
                    </p>
                    <h3>Sudoku using external API</h3>
                        <p>
                            Blurb content
                        </p>
            </>
        )
    }
}

export default SoloProject