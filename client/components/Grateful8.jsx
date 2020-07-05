import React from 'react'

const Grateful8 = (props) => {
    if (props.data == 2) {
        return (
            <div>
                <h3>Grateful-8</h3>
                    <p>
                        Grateful-8 is a web app that uses and external API to
                        rendomly generate a response to any questions typed inside
                        the input field.
                    </p>
                    <a href="https://grateful-8.herokuapp.com/">grateful-8</a>
            </div>
        )
    } else {
        return null
    }
}

export default Grateful8