import React from 'react'

const LifeOfTheParty = () => {
    return (
        <div className="video">
            <h3>Life of the Party</h3>
            <video width="600" controls>
                <source src="../../videos/red-or-black.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
                {/* <p>
                    Life of The party is a web app built using React state and 
                    consumes an external API. The app uses a REST API that contains 
                    the contents of a standard deck of cards without jokers. 
                    It simulates a drinking game called Red or Black, where 
                    players make a guess at three different stages. The questions 
                    and buttons change dynamically.
                </p>
                <p>
                    In this project I acted as the scrum master for our team and 
                    was incharge of setting up the boiler plate and internal API 
                    for the project.
                </p> */}
                <a className="right" href="https://life-of-the-party.herokuapp.com/">Go to App</a>
        </div>
    )
}

export default LifeOfTheParty