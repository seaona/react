// props are immutable, they are read-only

class Hello extends React.Component {
    // we need to use this particular name, otherwise doesn't work
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        let bangs = "!".repeat(this.props.bangs);
        // this.props.from = "BLUE"; not correct
        return (
            <div>
                <h1>Hi {this.props.to}, from {this.props.from}{bangs}</h1>
            </div>
        )
    }
}