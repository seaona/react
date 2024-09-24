import React, { Component, createContext } from'react';

export const ThemeContext = createContext();

// each context has 2 pieces: the provider and the consumer

export class ThemeProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {isDarkMode: true};
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState({ isDarkMode: !this.state.isDarkMode });
    }
    // any of the children will have access to the value we pass
    // it's just 1 value per context
    render() {
        return (
            <ThemeContext.Provider
                value={{ ...this.state, toggleTheme: this.toggleTheme }}
            >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
};