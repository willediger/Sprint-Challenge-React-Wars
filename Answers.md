# Answers

1.  What is React JS and what problems does it try and solve?
React JS is a JavaScript front-end library based around components that makes it easy to create dynamic apps that update the DOM. To do so, it maintains a virtual DOM, maintains state, allows you methods to update the DOM/state, and does so automatically. You pass around state and method as props, and this allows you a lot of flexibility in how you build apps.

1.  What does it mean to _think_ in react?
Thinking in react means you need to think about how the site you want to build can be broken down into components, and what state & methods you will need to facilitate the functionality you want in the site.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
A class component has an explicit render method, while a functional component simply returns the JSX that you want to render. A class component also has the ability to set and maintain state, whereas a functional component does not have any state itself. It only has the ability to receive props. A class component also has the option for you to define methods on the component which can change the state through setState, or perform other javascript necessary for your application.

1.  Describe state.
state is a property of a class component, which is usually an object. You generally set an initial state in your constructor() definition, i.e. this.state = {}, and update it through this.setState() method. setState allows you to update one property of the state object, or replace the entire state with a state that you've modified based on the `prevState` argument you're using in setState.
1.  Describe props.
props are entities which you can pass into a react component that can include values or methods to be used by the child component. you can pass in a current state value, or a className that you want to apply to the child component's elements, or a method that you want to be able to call from the child component.
