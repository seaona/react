import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
    };
    constructor(props) {
        super(props);
        this.state = { icons: ["bone", "cloud"] };
        this.addIcon = this.addIcon.bind(this);
    }

    // we should not do not mutate directly an object/array and save it in state
    // we should make a copy to the existing data structure and update it
    // using .map .filter .reduce and the spread operator

    addIcon() {
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({ icons: [...this.state.icons, newIcon] }); // we spread the array into a new array and update it
    }

    // copy array with spread operator
    // const copiedArray = [...originalArray];

    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
        <div>
            <h1>Icons: {icons}</h1>
            <button onClick={this.addIcon}>Add New Icon</button>
        </div>
        );
    }
}

export default IconList;