import React from 'react'

const Minesweeper = (props) => {
    return (
        <div>
            <h3>Minesweeper</h3>
                <p>
                    Minesweeper was the first real "build" project that I've ever
                    done using JavaScript. While most of foundation was about 
                    solving basic logic and learning how to access and make use 
                    of different types of data, this was the first instance of 
                    practical use.
                </p>
                <p>
                    Some base logic behind finding the mines on the board 
                    and CSS was done for us, the rest of the logic was based on 
                    objects and arrays manipulation. It was dauting  looking at 
                    a blank JS file, the Dopamine hit when it finally worked was 
                    unbelievable.
                </p>
                <a className="right" href="https://fai-songprasit.github.io/minesweeper/">MineSweeper</a>
        </div>
    )

}

export default Minesweeper