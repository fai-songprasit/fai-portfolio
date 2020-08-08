import React from 'react'

const WorkWithMe = () => {
    return (
        <div className="video">
            <h3>Pantree</h3>
            <video width="600" controls>
                <source src="../../videos/pantree.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>           
                <a className="right" href="https://workwithmegen.herokuapp.com/">Go to App</a>
        </div>
    )
}

export default WorkWithMe