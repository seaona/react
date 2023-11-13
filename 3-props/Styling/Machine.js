// we use className instead of class
// we use htmlFor instead of for
// we use camel case in styles
class Machine extends React.Component {
    render () {
        const fruits = {
            1: "🍊",
            2: "🍇",
            3: " 🍒",
        }
        const {s1, s2, s3} = this.props;
        const isWinner = (s1 == s2) && (s2 == s3);
        const syles = { fontSize: '50px', backgroundColor: 'purple' };

        return (
            <div className="Machine">
                <label htmlFor="textInput"></label>
                <p style={syles}>
                    {fruits[s1]} {fruits[s2]} {fruits[s3]}
                </p>
                <p className={isWinner ? 'Machine-winner' : 'Machine-loser'}>
                    {isWinner ? 'Winner' : 'Looser'}
                </p>
            </div>
        )
    }
}