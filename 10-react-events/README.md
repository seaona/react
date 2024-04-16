# REACT
## 10. React Events
### Events and Binding 'this'
Three ways of binding `this` on a component `<div onMouseEnter={this.dispenseWisdom}>`:
- **Solution 1**: bind it inline `onMouseEnter=this.dispenseWisdom.bind(this)`, but everytime we render the component, a new function is created, so it's not very efficient
- **Solution 2**: use inline arrow function `onMouseEnter={() => this.dispenseWisdom()}`, it also creates a new function everytime
- **Solution 3 (good)**: bind it in props above. It's more performant and we only bind once

```
constructor(props) {
    super(props);
    this.dispenseWisdom = this.dispenseWisdom.bind(this);
}
```
    
### Passing Functions to Child Components
- A very common pattern in React
- The idea: children are often not stateful, but need to tell parents to change state

How data flows:
- A parent component defines a function
- The function is passed as a prop to a child component
- The child component invokes the prop
- The parent function is called, usually setting new state
- The parent component is re-rendered along with its children

Where to bind:
- The higher the better - don't bind in the child component if not needed
- If you need a parameter, pass it down to the child as a prop, then bind in parent and child
- Avoid inline arrow functions / binding if possible
- No need to bind in the constructor **and** make an inline function

### Naming Conventions
- For consistency, try to follow the `action / handleAction` pattern
    - In the parent, give the function a name corresponding to the behaviour (remove, add, open, toggle...)
    - In the child, use the name of the action along with handle to name the event handler (handleRemove, handleAdd...)

### Lists and Keys
- **key** is a special string attr to include when creating lists of elements
- They help React identify which items have changed, are added or are removed
- They need to be unique
- Picking a key: use string that uniquely identifies item among siblings. Most often you would use IDs from your data as keys:
    - `this.state.todos.map(todo => <li key={todo.id}>)`
- If you don't have stable ids you may use the iteration index as a key as a last resort. But we should not use this if the item order may change or items can be deleted. This can cause performance problems or bugs with component state. **Index as keys are an anit-pattern**
    - `this.state.todos.map((todo, index) => <li key={index}>)`
- Use libraries `shortids` or `uuid` npm libraries