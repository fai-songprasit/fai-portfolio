import React from 'react'

const Todos = () => {
    return (
        <div className="video">
            <h3>Todos</h3>
            <video width="600" controls>
                <source src="../../videos/todos.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
                {/* <p>
                    This was my first solo full-stack project built during Bootcamp.
                    The Todos list uses everything that we have learnt so far,  
                    with a restricted timeframe of two days.
                </p>
                <p>
                    The front-end was built using React, Redux and CSS, while back-end 
                    and database was built using Knex and SQLite. Later deployed using 
                    Heroku.
                </p> */}
                <a className="right" href="https://first-todos-list.herokuapp.com/">Go to App</a>
        </div>
    )
}

export default Todos