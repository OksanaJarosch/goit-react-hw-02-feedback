

export const FeedbackOptions = ({stats: {good, neutral, bad}, onGood, onNeutral, onBad}) => {
    return (
<div>
<button onClick={onGood}>Good</button>
<button onClick={onNeutral}>Neutral</button>
<button onClick={onBad}>Bad</button>
</div>
    )
}