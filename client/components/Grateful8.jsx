import React from 'react'

const Grateful8 = () => {
    return (
        <div className="video">
            <h3>Grateful-8</h3>
                <video width="600" controls>
                    <source src="../../videos/grateful8.mp4" type="video/mp4"/>
                    Your browser does not support HTML video.
                </video>
                {/* <p>
                    Grateful-8 is a web app that uses and external API to
                    rendomly generate a response to any questions typed inside
                    the input field.
                </p>
                <p>
                    In this project I was in charge of the front-end designs 
                    of the page, which also incuded the use of SVG. SVG was 
                    particularly challenging for me as it obeyed a different 
                    set of rules from the CSS that I was used to.
                </p>
                <p>
                    This was our first week using React instead of Handlebars 
                    in conjunction with React router.
                </p> */}
                <a className="right" href="https://grateful-8.herokuapp.com/">Go to App</a>
        </div>
    )
}

export default Grateful8