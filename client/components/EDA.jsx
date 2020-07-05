import React from 'react'
import GroupProjects from './GroupProjects'
import Foundations from './Foundations'

class EDA extends React.Component {
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
                <Foundations/>
                <p>
                    The course then progressed onto the Bootcamp phase 
                    around mid-May, when level 2 was enforced and the students were 
                    allowed back on campus for studies. At this phase across 9 weeks 
                    I learnt to use both back-end and front-end tools such as:
                    <ul>
                        <li>npm</li>
                        <li>Express.js</li>
                        <li>Handlebars</li>
                        <li>SQLite</li>
                        <li>API</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Authentication</li>
                    </ul>
                </p>
                <p>
                    Throughout the course students were to practice pair programming 
                    during the learning phase, with group project capping off the
                    week.
                </p>
                <GroupProjects/>
            </>
        )
    }
}

export default EDA