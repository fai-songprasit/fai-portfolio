import React from 'react'

const Minesweeper = (props) => {
    return (
        <div className="video">
            <h3>Minesweeper</h3>
            <video width="600" controls>
                <source src="../../videos/minesweeper.mp4" type="video/mp4"/>
                Your browser does not support HTML video.
            </video>
                {/* <p>
                    Minesweeper was the first real "build" project that I've ever
                    done using JavaScript. While most of foundation was about 
                    solving basic logic and learning how to access and make use 
                    of different types of data, this was the first instance of 
                    practical use.
                </p>
                <p>
                    Some base logic behind finding the mines on the board 
                    and CSS were done for us, the rest of the logic was  
                    objects and arrays manipulation. It was daunting looking at 
                    a blank JS file, but the Dopamine hit when it finally worked 
                    was unbelievable.
                </p> */}
                <a className="right" href="https://fai-songprasit.github.io/minesweeper/">MineSweeper</a>
        </div>
    )

}

export default Minesweeper