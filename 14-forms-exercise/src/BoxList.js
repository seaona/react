import React, { Component } from "react";
import BoxForm from './BoxForm';
import Box from './Box';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        }
        this.addBox = this.addBox.bind(this);
        //this.removeBox = this.removeBox.bind(this);
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }));
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)
        })
    }

    renderBoxes() {
        return(
            <div>
                {this.state.boxes.map(box => (
                    <Box
                        key={box.id}
                        id={box.id}
                        width={box.width}
                        height={box.height}
                        backgroundColor={box.backgroundColor}
                        removeBox={() => this.removeBox(box.id)}
                    />
                ))}
            </div>
        )
    }

    render() {
        return(
            <div>
                <h1>Box Maker Thingy</h1>
                <BoxForm addBox={this.addBox}/>
                {this.renderBoxes()}
            </div>
        )
    }
}

export default BoxList;

