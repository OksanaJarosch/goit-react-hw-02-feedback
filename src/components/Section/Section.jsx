import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"
import { SectionContainer, Title } from "./Section.styled"


export const Section = ({title, stats, onGood, onNeutral, onBad, total, positivePercentage}) => {
    return (
        <SectionContainer>
        <Title>{title}</Title>
        {title === "Please leave feedback" ? <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad}></FeedbackOptions> : <Statistics stats={stats} total={total} positivePercentage={positivePercentage}></Statistics>}
        </SectionContainer>
    )
}