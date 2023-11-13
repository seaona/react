class Machine extends React.Component {
    render () {
        const fruits = {
            1: "🍊",
            2: "🍇",
            3: " 🍒",
        }
        const {s1, s2, s3} = this.props;
        const isWinner = (s1 == s2) && (s2 == s3);
        return (
            <div>
                <p>{fruits[s1]} {fruits[s2]} {fruits[s3]}</p>
                {
                    isWinner ?
                    <p>You win!!</p>
                    : <p>You loose</p>
                }
            </div>
        )
    }
}