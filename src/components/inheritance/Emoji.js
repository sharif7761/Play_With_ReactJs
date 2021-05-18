import React, {Component} from 'react';

class Emoji extends Component {

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`

    render(override) {
        let text = "Emoji Component"
        if(override) text = override
        return (
            <div>
                { text }
            </div>
        );
    }
}

export default Emoji;