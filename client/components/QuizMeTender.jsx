import React from 'react'

const QuizMeTender = (props) => {
    if (props.data == 4) {
        return (
            <div>
                <h3>Quiz Me Tender</h3>
                    <p>
                        Stuff about this project
                    </p>
                    <a href="https://quiz-me-tender.herokuapp.com/">QuizMeTender</a>
            </div>
        )
    } else {
        return null
    }
}

export default QuizMeTender