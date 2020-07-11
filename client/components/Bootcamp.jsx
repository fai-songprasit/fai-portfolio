import React from 'react'
import WorkWithMe from './WorkWithMe'
import Grateful8 from './Grateful8'
import LifeOfTheParty from './LifeOfTheParty'
import QuizMeTender from './QuizMeTender'

class Bootcamp extends React.Component {
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
                return <WorkWithMe/>
            case "2":
                return <Grateful8/>
            case "3":
                return <LifeOfTheParty/>
            case "4":
                return <QuizMeTender/>
            default:
                return (
                    <div>
                        <h3>Group project contents</h3>
                        <p>
                            Blurb about group projects, durations etc.
                        </p>
                    </div>
                )
        } 
    }

    render() {
        return (
            <>
            <h2>Bootcamp</h2>
                <p>
                    The course then progressed onto the Bootcamp phase 
                    around mid-May, when level 2 was enforced and the students were 
                    allowed back on campus for studies. At this phase across 9 weeks 
                    I learnt to use both back-end and front-end tools such as npm, 
                    Express, Handlebars, SQLite, creating internal amd consuming
                    external API, Rect, Redux and Authentication. 
                </p>
                <p>
                    Throughout the course students were to practice pair programming 
                    during the learning phase, with group project capping off the
                    week.
                </p>

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
                        {this.renderContent(this.state.id)}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Bootcamp