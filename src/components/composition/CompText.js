import React from 'react';

const CompText = ({ addEmoji }) => {
    const text = 'I am Js Programming Language Composition'

    return (
        <div>
            { addEmoji ? addEmoji(text, ':heart') : text }
        </div>
    );
};

export default CompText;