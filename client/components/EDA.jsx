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
                        <h3>Foundations</h3>
                        <p>
                            Both soft and technical skills were covered 
                            throughout the five sprints.
                        </p>
                        <div className="flex_container">
                        <div>
                            <p>Soft Skills:</p>
                            <ul>
                                <li>Agile concepts</li>
                                <li>Mindfulness</li>
                                <li>Neuroplasticity</li>
                                <li>Stress management</li>
                                <li>Building good habits</li>
                            </ul>
                        </div>
                        <div>
                        <p>Techinical Skills:</p>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Code readability</li>
                                <li>JavaScript</li>
                                <li>Git and Github</li>
                                <li>DOM manipulation</li>
                                <li>Test Driven Development</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                )
        } 
    }

    render() {
        return (
            <>
            <h2>Enspiral Dev Academy</h2>
            <div className="subtext">
                <p>
                    My career changed when I decided to enrol at <a href="https://devacademy.co.nz/">
                    EDA</a>. The course began in April 2020 during the COVID-19 
                    lockdown. Foundations was the first phase of the process, 
                    consisting fo five week long sprints which worked its way 
                    up in complexity.
                </p>
                <p>
                    Foundation, as the name suggests, is a crash course through 
                    the basics of HTML, CSS, JavaScript, DOM manipulation and Git. 
                    The exercises were designed to prepare us for the intensive 
                    Bootcamp that was to come. 
                </p>
            </div>
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