/*
Learn how to make a React JS higher-order component (HOC) and follow good practice.

A HOC is a function that takes a component as the first parameter and returns a function wrapping the first parameter.

function withExample(Component) {
  return function(props) {
    return <Component ></Component>
  }
}
Just getting started on HOC? Try PC upgrade specs using HOC in ReactJS kata

Not sure what it's all about see my post about it: Understanding higher-order component and ReactJS docs.

Your challenge:
Truncate a paragraph of text for elements that contain props.children of type String

Create a HOC
Should read props.children and truncate to the specified length
A textLength prop will be passed in to specify where to cut the text to
Default textLength is 10
If textLength is -1 then render props.children as is without truncating.
Should be able to pass additional props through
HOC should have correctly formatted displayName WithTruncateParagraph(ComponentName) as shown in React docs
Enjoy :)
*/

const React = require('react');

const withTruncateParagraph = (Component) => {
   function wrappedComponent(props) {
    const textLen = props.textLength === undefined ? 10 : props.textLength;
    const len = textLen > -1 ? textLen: 0;
    const sliced = props.textLength === -1 ? props.children: `${props.children.slice(0, len)}...`;
    return <Component {...props}>{sliced}</Component>;
  }
  wrappedComponent.displayName = `WithTruncateParagraph(${getDisplayName(Component)})`;
  return wrappedComponent;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

