import React, { Component } from "react";

class Box extends Component {

    render() {
        const style = {
            width: `${this.props.width}em`,
            height: `${this.props.height}em`,
            backgroundColor: this.props.backgroundColor,
        }

        return(
            <div>
                <div style={style} />
                <button onClick={this.props.removeBox}>X</button>
            </div>
        )
    }
}

export default Box;

