# React-Testing Assertions
    We often call expect with a matcher just like ( toBeInsideDocument)
    or use the ones already customized that belong to RTL
    + list of matchers : https://jestjs.io/docs/using-matchers
    + jest dom (RTL customized) : https://github.com/testing-library/jest-dom
# What to test :
    + Test component renders 
    + Test components renders with props
    + Test components renders in different states    
    + Test components reacts to events 
# What not to test : 
    + Implementation details ( test behavior not how they are implemented )
    + Third part library ( as Mui already well tested no need to do that again)
    + Code that is not important from a user point of view  