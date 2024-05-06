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

## 13. Forms in React
### Controlled Components Technique
- Have a js function (`handleChange`) that
    - handles the submission of the form **and**
    - has access to the data the user entered
- In React, mutable state is kept in the **state** of components and only updated with `setState()`
- React controls:
    - what is shown (the value of the compoent)
    - what happens when the user types (this gets kept in state)

### Handling Multiple Inputs: ES2015
- Introduced a few object enhancements
- This includes the ability to create objects with dynamic keys based on js expressions
- Computed property names:
```
let microchip = 1243456;
let catData = {
    // property computed inside the object literal
    [microchip]: "Blue Steele
}
```
- Note: on React, instead of using `label for='username'`, since `for` is a special word, we need to use `htmlFor`, (like we do with `className`)

### Passing Data Up to a Parent Component
- In React we generally have downward data flow. "Smart" parent components with simpler child components
- Forms are stateful, but call a method in the parent, where all the data we care about lives.

### Keys and UUIDs
- Using an interation index as a key is a bad idea
- No natural unique key? Use a library to create a uuid
- `npm i uuid`

## 17. Lifecycle Methods
### React Component Lifecycle
- Every component comes with methods that allow developers to update application state and reflect the changes to the UI before/after key react 'events'
- There are 3 main phases:
    - mounting
    - updating
    - unmounting

- **constructor()**: often used for initializing state or binding event handlers to class instances
- **render()**: after the constructor, React calls render(). It tells React what should be displayed. React updates the DOM to match the output of render().
- **componentDidMount**: it will run after the constructor and the 1st render.

### ComponentDidMount
- Mounting is the first time the component is rendered to DOM
- It is a good place to load any data via AJAX or set up subscriptions/timers
- Calling `setState()` here it triggers a re-render, so be cautios
- We should not `setState` in the constructor never

### ComponentDidUpdate
- Events that cause a re-render:
    - New props
    - setState()
    - forceUpdate(): when you have some external data and you want to manually force a re-render
- Once this happens, everytime a component is updated, the componentDidUpdate is called
- This is a suitable place to implement any side effect operations
    - syncing up with localStorage
    - auto-saving
    - updating DOM for uncontrolled components
- You can compare the previous and current props and state `componentDidUpdate(prevProps, prevState)`


### ComponentWillUnmount
- It's called right before a component is unmounted/removed from the page
- To perfrom any necessary cleanup, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`
- Calling `setState` here is useless, since there will be no re-rendering after this. Ie `clearInterval(this.timerId)`

## 20. React Router
- Server-Side Routing
    - Click on a link, send a request on the backend and returns the corresponding page which replace the entire DOM
    - The server decides what HTML to return based on the URL requested
- Client-Side Routing
    - The page never refreshes, but we see different contents
    - But we don't get URLs, we can't go forward and backwards and we don't have a way to bookmark a page on the site
    - **Single Page Applications**
    - `npm i react-router-dom`
- We use Link instead of anchor tag a, so the page does not reloads
- We use NavLink for having the additional feature of styling the currently selected link (active)
- Old React Router
    - `component` --> now `element`
    - `render` for not instantiated the component everytime --> now `element`+ useMemo() hook

### Side Notes
- **Window.localStorage**: we can only store strings
    - We can add items: `window.localStorage.setItem("color", "blue")`
    - We can call items: `window.localStorage.getItem("color")`
    - We clear it: `window.localStorage.clear()`
- Wrap an element with another to use the same styles
    - `{this.props.children}` to show the children content