import React from 'react'

const LifeOfTheParty = (props) => {
    if (props.data == 3) {
        return (
            <div>
                <h3>Life of the Party</h3>
                    <p>
                        Stuff about this project
                    </p>
                    <a href="https://life-of-the-party.herokuapp.com/">L.O.T.P</a>
            </div>
        )
    } else {
        return null
    }
}

export default LifeOfTheParty