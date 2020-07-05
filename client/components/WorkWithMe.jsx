import React from 'react'

const WorkWithMe = (props) => {
    console.log (props.id)
    if (props.id == 1) {
        return (
            <div>
                <h3>WorkWithMe</h3>
                    <p>
                        WorkWithMe is a web app designed to randomize the students
                        in my cohort and group them into teams of 3 (vertical view) or
                        5 (horizontal view)
                    </p>
                    <a href="https://workwithmegen.herokuapp.com/">WorkWithMe</a>
            </div>
        )
    } else {
        return null
    }
}

export default WorkWithMe