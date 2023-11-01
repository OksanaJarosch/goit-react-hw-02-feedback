import {Notification} from "../Notification/Notification"

export const Statistics = ({stats: {good, neutral, bad}, total, positivePercentage}) => {

    if (total > 0) {
        return (
            <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
            </>
                )
    }
    
    return (<Notification message="There is no feedback"></Notification>)
}