import React from 'react'
import WorkWithMe from './WorkWithMe'
import Grateful8 from './Grateful8'
import LifeOfTheParty from './LifeOfTheParty'
import QuizMeTender from './QuizMeTender'

class GroupProjects extends React.Component {
    state = {
        clicked: false,
    }

    handleClick = (e) => {
        if (this.state.clicked == true) {
            this.setState ({
                clicked: false,
                name: '',
            })
        } else if (this.state.clicked == false) {
            this.setState ({
                clicked: true,
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
                                <WorkWithMe/>
                                <Grateful8/>
                                <LifeOfTheParty/>
                                <QuizMeTender/>
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