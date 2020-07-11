import React from 'react'
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
            </>
        )
    }
}

export default EDA