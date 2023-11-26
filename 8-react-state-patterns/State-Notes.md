# State Notes
## Designing State
### Minimizing State
- Don't mutate the state directly. Make a copy of it
- Minimize your state: if x does not change, it should be a prop
- If x is already captured y y, don't add x to the state
- Example of bad practice


```
this.state = {
    firstName: 'Matt',
    lastName: 'Lane',
    birthday: '1995-01-08',
    age: 64,
    modd: 'irate0
}

```
- firstName, lastName, birthday: never change, so should not be in the state
- age: could be derived from birthday, so also should not be in the state
- mood: is the only stateful piece

### State Location
- We want to support the downward data flow
- It makes more sense for a parent component to manage state and have a bunch of dumb stateless child display components
- Debugging is easier because the state is centralized
- Example: the parent component controls the state, the child work with props

```
class TodoList exsdtends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {task: 'do this', done: false, id: 1},
                {task: 'do that', done: true, id: 2}
            ]
        };
    }

    render() {
        return (
            <ul>
                {this.state.todos.map(t => <Todo {...t} />)}
        )
    }
}
```