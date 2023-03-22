### Questions
1. What is the difference between Component and PureComponent? give an example where it might break my app.
   
   The difference is mainly in the methods for updating the components. A React component is rendered by default whenever receives new props or state. A pureComponent does a comparison with the actual props and state, if there are changes it renders again. A pure component might fail in the case that a prop is a complex data type with parameters that could change without changing the the reference to the object, so a change to the object could pass undetected.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
   
   It is possible that a component that returns false on shouldComponentUpdate might not update/re-render whenever a context change occurs, which could let to not presenting updated data that was managed using the context.

3. Describe 3 ways to pass information from a component to its PARENT.
   
   - Using the context api and updating the context data in the child component.
   - When a function was passed as a prop and the component uses the function.
   - When multiple components are children of a parent component, in this case one component could modify the data and the different descendants fo the parent component will receive the changes.

4. Give 2 ways to prevent components from re-rendering.
   
   One way is using the shouldComponentUpdate lifecycle Method and returning false according to a logic implemented on it. Another way is using a pure component that does not re-render when data stored in object data types changes.

5. What is a fragment and why do we need it? Give an example where it might break my app.

   React fragments enable to use and return children in the components without the need to create extra nodes in the Dom.
   Key attributes are the only attributes that can be passed to a react fragment, so in case that different attributes are passed the application could break.

6. Give 3 examples of the HOC pattern.

   - A HOC used for adding an style to a component received while passing props from it's parent to the child component.
   - Could be used for logging data to the console when a component is used for a specific purpose.
   - It could also provide ways for validating if a user has access to a resource, and otherwise redirect the user or execute some other action.

7. What's the difference in handling exceptions in promises, callbacks and async...await.
   
   When using callbacks, we are basically handling errors in a more traditional way for JS, where the first argument represents an error. With Promises the catch method is used, and when a promise is rejected the error is available for the next error handler. Async await uses a try and catch block approach.

8. How many arguments does setState take and why is it async.
   R. It takes two arguments, one for the actual state and the other other argument is a callback function that takes place when the update is applied. It is Async so that React can decide when to update the state and optimize performance.

9. List the steps needed to migrate a Class to Function Component.
   
   Convert the class definition to a function definition, the name of the function should be the original name of the class. The body of the component function should be what was before in the render method of the class component. Lifecycle methods should be updated with the appropriate hooks. Check for other class specific fetaures/syntax and refactor to use hooks.

10. List a few ways styles can be used with components.
    
    Inline styles, using className and a external CSS file, making use of styled components as well.

11. How to render an HTML string coming from the server.
    
    It could be implemented using Vanilla JS and adding the string or data as a prop in an already defined component.