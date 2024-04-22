import React, { Component } from "react";
import { v4 as uuid } from 'uuid';

class BoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: '',
            width: '',
            backgroundColor: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newBox = {...this.state, id: uuid()}
        this.props.addBox(newBox);
        this.setState({
            height: '',
            width: '',
            backgroundColor: '',
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='height'>Height</label>
                        <input
                            type='text'
                            name='height'
                            value={this.state.height}
                            onChange={this.handleChange}
                            id='height'
                        />
                    </div>
                    <div>
                        <label htmlFor='width'>Width</label>
                        <input
                            type='text'
                            name='width'
                            value={this.state.width}
                            onChange={this.handleChange}
                            id='width'
                        />
                    </div>
                    <div>
                        <label htmlFor='backgroundColor'>Background Color</label>
                        <input
                            type='text'
                            name='backgroundColor'
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                            id='backgroundColor'
                        />
                    </div>
                    <button>Add a new box!</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;

