import React from 'react'
import Blog from './Blog'
import Minesweeper from './Minesweeper'

class EDA extends React.Component {
    state = {
        id: '',
    }

    handleClick = (e) => {
        const id = e.target.getAttribute('id')
        if (this.state.id == id) {
            this.setState ({
                id: '',
            })
        } else {
            this.setState ({
                id: id,
            })
        }
    }

    renderContent = (id) => {
        switch (id){
            case "1":
                return <Blog/>
            case "2":
                return <Minesweeper/>
            default:
                return (
                    <div>
                        <h3>Foundations Contents</h3>
                        <p>
                            Blurb about foundations
                        </p>
                        <p>
                            make pages flash clickable image when hover??
                        </p>
                    </div>
                )
        } 
    }

    render() {
        return (
            <>
            <h2>Enspiral Dev Academy</h2>
                <p>
                    My career changed when I decided to enrol at <a href="https://devacademy.co.nz/">
                    EDA</a>. The course began in April 2020 during the COVID-19 
                    lockdown. Foundations was the first phase of the process. Where  
                    HTML, CSS, JavaScript and Git was covered in preperations for 
                    the intensive Bootcamp that was to come. 
                </p>
            <div className="container">
                <div className="list">
                    <div className="text">
                        <p className="hover">
                            <a id="1" onClick={this.handleClick}>Blog</a>
                        </p>
                        <p className="hover">
                            <a id="2" onClick={this.handleClick}>Minesweeper</a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        {this.renderContent(this.state.id)}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default EDA