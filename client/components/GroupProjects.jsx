import React from 'react'
import WorkWithMe from './WorkWithMe'
import Grateful8 from './Grateful8'
import LifeOfTheParty from './LifeOfTheParty'
import QuizMeTender from './QuizMeTender'

class GroupProjects extends React.Component {
    state = {
        clicked: false,
        name: '',
    }

    //need to fix this so that each individual click check if its the right name is clicked
    //right now any of the <a> changes clicked state instead of swtching between their clicks
    //need to pass state to component to check if the name is the right one before showing content
    handleClick = (e) => {
        let name = e.target.getAttribute('name')
        if (this.state.clicked == true) {
            this.setState ({
                clicked: false,
                name: '',
            })
        } else if (this.state.clicked == false) {
            this.setState ({
                clicked: true,
                name: name,
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="list">
                    <div className="text">
                        <p className="hover">
                            <a name="WWM" onClick={this.handleClick}>WorkWithMe</a>
                        </p>
                        <p className="hover">
                            <a name="G8" onClick={this.handleClick}>Grateful-8</a>
                        </p>
                        <p className="hover">
                            <a name="LOTP" onClick={this.handleClick}>L.O.T.P</a>
                        </p>
                        <p className="hover">
                            <a name="QMT" onClick={this.handleClick}>Quiz Me Tender</a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        {/* may need to use onclick in all the components to get it to work */}
                        {this.state.clicked ? 
                            <div>
                                <WorkWithMe data={this.state.name}/>
                                <Grateful8 data={this.state.name}/>
                                <LifeOfTheParty data={this.state.name}/>
                                <QuizMeTender data={this.state.name}/>
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