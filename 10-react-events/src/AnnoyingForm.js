import React, { Component } from 'react';

class AnnoyingForm extends Component {
    handleKeyUp(evt) {
        // get event data
        console.log(evt.keyCode)
        if (evt.keyCode === 106) {
            alert('************** I LOVE THE * CHARACTER **************');
        } else {
            alert('BOO');
        }
    }

    render() {
        return(
            <div>

                <h3>Try Typing in Here:</h3>
                <textarea onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

// onKeyDown: when you press a char
// onKeyUp: when you release it
// onKeyPress: press and release

export default AnnoyingForm;