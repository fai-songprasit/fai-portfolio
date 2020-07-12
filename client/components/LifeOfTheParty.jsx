import React from 'react'

const LifeOfTheParty = () => {
    return (
        <div>
            <h3>Life of the Party</h3>
                <p>
                    Life of The party is a web app built using React state and 
                    consumes an external API. This app uses a REST API that contains 
                    the contents of a standard deck of cards without jokers.
                </p>
                <p>
                    This app simulates a drinking game called Red or Black, where 
                    players guess from three different categories. The questions 
                    and buttons change dynamically. Next category only shows if 
                    guessed correctly. Due to the restricted timeframe, responses 
                    can only been seen in the console.
                </p>
                <a className="right" href="https://life-of-the-party.herokuapp.com/">L.O.T.P</a>
        </div>
    )
}

export default LifeOfTheParty