class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    num={3}
                    data={[1, 2, 3 ,4, 5]}
                    isFunny={true}
                    bangs={4}
                />
                <Hello
                    to="Britney"
                    from="Adele"
                    num={3}
                    data={[1, 2, 3 ,4, 5]}
                    isFunny={true}
                    bangs={10}
                />
                <Hello
                    to="George"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));