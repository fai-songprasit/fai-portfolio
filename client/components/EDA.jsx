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
                    lockdown. First came Foundations, covering HTML, CSS, JavaScript 
                    and Git. 
                </p>
                <Foundations/>
                <p>
                    The course then progressed onto the Bootcamp phase 
                    around mid-May, when level 2 was enforced and the students were 
                    allowed back on campus for studies. At this phase across 9 weeks 
                    I learnt to use both back-end and front-end tools like, npm, 
                    express, handlebars, SQLite, REST API (create internal and 
                    pulling from external), React, Redux and authentication
                </p>
                <GroupProjects/>
            </>
        )
    }
}

export default EDA