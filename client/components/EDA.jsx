import React from 'react'
import GroupProjects from './GroupProjects'
import Foundations from './Foundations'

class EDA extends React.Component {
    render() {
        return (
            <>
            <h2>Enspiral Dev Academy</h2>
                <p>
                    My career change started at <a href="https://devacademy.co.nz/">
                    EDA</a> in 2020, where I was part of the Kotare cohort.
                    The bootcamp started in May 2020 and ended at the start of 
                    August 2020, I have had next to no experience with programming 
                    prior to this course.
                </p>
            <Foundations/>
            <GroupProjects/>
            </>
        )
    }
}

export default EDA