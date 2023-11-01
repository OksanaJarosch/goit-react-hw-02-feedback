import { ButtonsContainer, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return (
<ButtonsContainer>
{options.map(option => {
        return (<Button onClick={onLeaveFeedback} key={option}>{option}</Button>)
    })
}
</ButtonsContainer>
    )
}