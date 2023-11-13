function getNum() {
    return Math.floor(Math.random() * 3) + 1;
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Friend
                    name="Elton"
                    hobbies={['Piano', 'Singing', 'Dancing']}
                />
                <Friend
                    name="Frida"
                    hobbies={['Drawing', 'Painting']}
                />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));