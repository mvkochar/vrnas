import React from 'react'
import classes from './FaqItem.module.css'

type FaqItemProps = {
    id: number
    question: string
    answer: string
}

const FaqItem = ({question, answer }: FaqItemProps) => {
    const [viewAnswer, setViewAnswer] = React.useState(false)
    const handleAnswer = ()=> {
        setViewAnswer((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.faq_item}>
            <div className={classes.faq_item_heading}>
                <h6 className={classes.faq_item_question}>{question}</h6>
                <button className={classes.faq_item_action} onClick={handleAnswer}>
                    <img src={viewAnswer ? "/images/vector_up.png" : "/images/vector_down.png" } alt="vector" />
                </button>
            </div>
            <p className={viewAnswer ? classes.faq_item_answer : 'd-n'}>{answer}</p>
        </div>
    )
}

export default FaqItem