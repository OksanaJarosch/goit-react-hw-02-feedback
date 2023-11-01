import { ButtonsContainer, Button } from "./FeedbackOptions.styled"
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

export const FeedbackOptions = ({onGood, onNeutral, onBad}) => {
    return (
<ButtonsContainer>
<Button onClick={onGood}><AiFillLike /></Button>
<Button onClick={onNeutral}>Neutral</Button>
<Button onClick={onBad}><AiFillDislike /></Button>
</ButtonsContainer>
    )
}