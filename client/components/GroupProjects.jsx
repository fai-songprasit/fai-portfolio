import React from 'react'
import WorkWithMe from './WorkWithMe'
import Grateful8 from './Grateful8'
import LifeOfTheParty from './LifeOfTheParty'
import QuizMeTender from './QuizMeTender'

class GroupProjects extends React.Component {
    state = {
        clicked: false,
        id: '',
    }

    //need to fix this so that each individual click check if its the right name is clicked
    //right now any of the <a> changes clicked state instead of swtching between their clicks
    //need to pass state to component to check if the name is the right one before showing content
    handleClick = (e) => {
        let id = e.target.getAttribute('id')
        if (this.state.clicked) {
            this.setState ({
                clicked: false,
                id: '',
            })
        } else if (this.state.clicked) {
            this.setState ({
                clicked: true,
                id: id,
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="list">
                    <div className="text">
                        <p className="hover">
                            <a id="1" onClick={this.handleClick}>WorkWithMe</a>
                        </p>
                        <p className="hover">
                            <a id="2" onClick={this.handleClick}>Grateful-8</a>
                        </p>
                        <p className="hover">
                            <a id="3" onClick={this.handleClick}>L.O.T.P</a>
                        </p>
                        <p className="hover">
                            <a id="4" onClick={this.handleClick}>Quiz Me Tender</a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        {/* may need to use onclick in all the components to get it to work */}
                        {this.state.clicked ? 
                            <div>
                                <WorkWithMe id={this.state.id}/>
                                <Grateful8 id={this.state.id}/>
                                <LifeOfTheParty id={this.state.id}/>
                                <QuizMeTender id={this.state.id}/>
                            </div> 
                            : <div>
                                <h3>Group project contents</h3>
                                    <p>
                                        Blurb about group projects, durations etc.
                                    </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupProjects