import React from 'react'

const WorkWithMe = () => {
    return (
        <div>
            <h3>WorkWithMe</h3>
                <p>
                    WorkWithMe is a web app designed to help our facilitators 
                    put students into groups. The app randomizes the students 
                    listed inside a database which we created using the names 
                    and profile pictures of the students in my cohort. Grouping 
                    them into teams of 3 (vertical view) or 5 (horizontal view)
                    while in full screen display.
                </p>
                <p>
                    <em>Note:</em> The concept behind the landing page was a 
                    humourous addition to annoy our front-end facilitator who, 
                    unfortunately (or fortunately?) did not make it to 
                    presentation day.
                </p>
                <a className="right" href="https://workwithmegen.herokuapp.com/">WorkWithMe</a>
        </div>
    )
}

export default WorkWithMe