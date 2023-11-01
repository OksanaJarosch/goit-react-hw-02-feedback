import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import { SectionContainer, Title } from "./Section.styled"


export const Section = ({title, stats, total, positivePercentage, onLeaveFeedback}) => {
    return (
        <SectionContainer>
        <Title>{title}</Title>
        {title === "Please leave feedback" 
        ? <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions> 
        : <Statistics stats={stats} total={total} positivePercentage={positivePercentage}></Statistics>}
        </SectionContainer>
    )
}