# React-Testing RTL Queries:
Every test we write generally involves the basic following steps: 
    + Render the Component
    + Find an element rendred by the component
    + Assert agains the element found in step2 which will pass or fail the test
For Assertion we use expect passing a value and conbine it with a matcher function from jest or jest-dom