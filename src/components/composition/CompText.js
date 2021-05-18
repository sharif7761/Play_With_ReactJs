import React from 'react';

const CompText = ({ addEmoji, addBracket }) => {
    let text = 'I am Js Programming Language Composition'
    if(addEmoji) {
        text = addEmoji(text, ':heart')
    }
    if(addBracket) {
        text = addBracket(text)
    }

    return (
        <div>
            { text }
        </div>
    );
};

export default CompText;
