import React, {Component} from 'react';

class CompEmoji extends Component {

    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`

    render() {
        return this.props.children({ addEmoji: this.addEmoji})
    }
}

export default CompEmoji;