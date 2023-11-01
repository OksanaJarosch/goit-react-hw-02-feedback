import {Notification} from "../Notification/Notification"
import { StatsContainer } from "./Statistics.styled"

export const Statistics = ({stats: {good, neutral, bad}, total, positivePercentage}) => {

    if (total > 0) {
        return (
            <StatsContainer>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
            </StatsContainer>
                )
    }
    
    return (<Notification message="There is no feedback"></Notification>)
}