import React, {useState} from 'react';
import './EightBall.css';

const EightBall = ({answers}) => {
    const [color, setColor] = useState("black");
    const [text, setText] = useState("Think of a Question");
    const answerQuestion = () => {
        if (color === "black") {
            const idx = Math.floor(Math.random() * answers.length);
            setColor(answers[idx].color);
            setText(answers[idx].msg);
        } else {
            setColor("black");
            setText("Think of another Question");
        }
    }

    return (
        <button id="8ball" class={color} onClick={answerQuestion}>
            {text}
        </button>
    )
}

export default EightBall;