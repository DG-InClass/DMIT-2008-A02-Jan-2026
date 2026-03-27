// ~/tests/TodoList.test.js
//                 \______/
//                   | Ending our tests with .test.js or with .spec.js allows the
//                     Jest testing environment to "find" our test files

import TodoList from '../components/TodoList'; // The React component we want to test
import { fireEvent, render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'; // Just doing the import will get the jsDOM all set up with the browser


test('todo list title renders correctly', () => {
    render(<TodoList />);
    const titleElement = screen.getByText('My Todo List');
    expect(titleElement).toBeInTheDocument();
});

test('todo item is added successfully', () => {
    // The "Triple-A" pattern when writing test
    // Arrange - we set up all the background stuff
    render(<TodoList />);
    const inputElement = screen.getByLabelText("New Todo");
    const buttonElement = screen.getByText("Add Todo");
    const listElement = screen.getByTestId("todo-item-list");
    const EXPECTED_STRING = "Learn Testing in JavaScript";
    // let's add the string to our input element
    fireEvent.change(inputElement, {
        target: { value: EXPECTED_STRING }
    });
    // we can make a little "precondition" check that the input is working
    expect(inputElement.value).toBe(EXPECTED_STRING);

    // Act - we interact with our component
    //       (the "thing" we are actually testing)
    act(() => {
        buttonElement.click();
    });

    // Assert - make sure it's working as expected
    expect(listElement).toHaveTextContent(EXPECTED_STRING);
    expect(inputElement.value).toBe('');
});
