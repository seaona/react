function getNum() {
    return Math.floor(Math.random() * 3) + 1;
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Machine
                    s1={getNum()}
                    s2={getNum()}
                    s3={getNum()}
                />
                <Machine
                    s1={getNum()}
                    s2={getNum()}
                    s3={getNum()}
                />
                <Machine
                    s1={getNum()}
                    s2={getNum()}
                    s3={getNum()}
                />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));