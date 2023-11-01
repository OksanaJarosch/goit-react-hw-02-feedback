import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics"


export const Section = ({title, stats, onGood, onNeutral, onBad, total, positivePercentage}) => {
    return (
        <>
        <h2>{title}</h2>
        {title === "Please leave feedback" ? <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad}></FeedbackOptions> : <Statistics stats={stats} total={total} positivePercentage={positivePercentage}></Statistics>}
        </>
    )
}