import React from 'react'
import WorkWithMe from './WorkWithMe'

class GroupProjects extends React.Component {
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
                            <a onClick={this.handleClick}>WorkWithMe</a>
                        </p>
                        <p>
                            <a onClick={this.handleClick}>Grateful-8</a>
                        </p>
                        <p>
                            <a href="https://life-of-the-party.herokuapp.com/">L.O.T.P</a>
                        </p>
                        <p>
                            <a href="https://quiz-me-tender.herokuapp.com/">Quiz Me Tender</a>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="text">
                        {this.state.clicked ? <WorkWithMe/> : <h3>Group project contents</h3>}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupProjects