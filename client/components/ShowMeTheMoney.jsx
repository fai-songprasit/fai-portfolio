import React from 'react'

const ShowMeTheMoney = () => {
    return (
        <div className="video">
            <h3>Show Me The Money</h3>
            <video width="600" controls>
                <source src="../../videos/show-me-the-money.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
                {/* <p>
                    This was the first project with a pre-set scenario, MVP and 
                    ReadMe document. Our client was Google and we were tasked 
                    with creating a meeting cost tracker using part of someone 
                    else's code base. The base came pre-programmed with 
                    authentication and SaaS.
                </p>
                <p>
                    For this project we worked in a much larger team of 7. 
                    I was in charge of the overall CSS for this project and 
                    worked with one other on the logic behind the dashboard and 
                    history display.
                </p> */}
                <a className="right" href="https://show-me-the-monaay.herokuapp.com/">Go to App</a>
        </div>
    )
}

export default ShowMeTheMoney