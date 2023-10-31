

export const Statistics = ({stats: {good, neutral, bad}, }) => {
    return (
<>
<p>Good: {good}</p>
<p>Neutral: {neutral}</p>
<p>Bad: {bad}</p>
</>
    )
}