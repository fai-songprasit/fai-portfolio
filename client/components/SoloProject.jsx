import React from 'react'
import Kudosu from './Kudosu'
import Todos from './Todos'

class SoloProject extends React.Component {
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
                return <Todos/>
            case "2":
                return <Kudosu/>
                    default:
                return (
                    <div>
                    <h3>Solo project</h3>
                        <p>
                            This space is for showcasing what I have been able 
                            to create in my own time outside of EDA. 
                        </p>
                        <p>
                            My current aim is to practice and learn how to build 
                            a more responsive website. Using what I have learnt 
                            so far to optimise user experience, while generally 
                            keeping up the habbit of learning new things and 
                            coding regularly.
                        </p>
                    </div>
                )
        } 
    }
    
    render() {
        return (
            <div>
                <h2>Solo Projects</h2>
                <div className="subtext">
                    <p>
                        This portfolio was the first solo project that I've worked
                        on that was not part of the course content. For the most part 
                        of bootcamp, the exercises that have been given to us to work
                        on during the week were mostly half started. Either the
                        front-end or the back-end side has been partially completed
                        inorder for us to quickly absorb and practice the core concepts
                        of the new tech.
                    </p>
                    <p>
                        What this section concerns itself with are projects that I have
                        worked on or have been working on in my own time. I use it as 
                        a way to challenge myself and learn new techniques or to 
                        reinforce old ones, as some challenges can only be found when 
                        you are building something from scratch.
                    </p>
                </div>
                <div className="container">
                    <div className="list">
                        <div className="text">
                            <p className="hover">
                                <a id="1" onClick={this.handleClick}>Todos</a>
                            </p>
                            <p className="hover">
                                <a id="2" onClick={this.handleClick}>Kudosu</a>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="text">
                            {this.renderContent(this.state.id)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SoloProject