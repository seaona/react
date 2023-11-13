//Class Component
    // there must be a render method and return 1 thing

class Hello_comp extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
                <h1>Hello there!</h1>
            </div>
        );
    }
}

function Hello_func() {
    return (
        <div>
                 <h1>Hello there!</h1>
                 <h1>Hello there!</h1>
                 <h1>Hello there!</h1>
             </div>
    )
}
// Function Component
ReactDOM.render(<Hello_comp/>, document.getElementById('root'));