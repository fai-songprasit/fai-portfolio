import React from 'react'

const QuizMeTender = () => {
    return (
        <div>
            <h3>Quiz Me Tender</h3>
                <p>
                    Quiz me tender is a web app that simulates a pub quiz where 
                    the categories, questions and multi choice answers were  
                    products of consuming an external API. In this React app we 
                    used Redux which involved creating the actions and reducers 
                    necessary for the API call and stored the dynamic features 
                    inside a global state.
                </p>
                <p>
                    I was in charge of the POST request, the landing page and 
                    the scoring display for this particular project. I also 
                    acted as the git master for our team.
                </p>
                <a className="right" href="https://quiz-me-tender.herokuapp.com/">QuizMeTender</a>
        </div>
    )
}

export default QuizMeTender