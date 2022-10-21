# React-To-Do-List App
## pseudocode:first draft

## List of requirements

- Dynamically Render the content with React using components
- Use Local Storage to store all to-do list data in the browser
- Display all to-do list items
- Three "views" for the user: All, Completed, & To-Do (not completed)
- Display Prompting text to add item
- Cross out or check off one item as "completed"
- See a count of remaining items
- Remove one item (either hard delete or soft delete/archive)
- Check off or cross out all items in one click as a "completed all" function
- Remove all completed items (soft delete/archive)
- Ability to press a button and all checked off items become active again


## UI Components
- Form: Input form for user to enter task
- Buttons: 
    - header to display title/app name
    - submit/enter button
    - delete button after task is entered
    - buttons to change state: pending, completed and all
    - checkbox to indicate when a task is completed
    - unordered list: the entered tasks will be appended to it
    - counter to show remaining tasks


## Header
- header element that displays the title

## Input: user types in a task
- user enters the list item in a form(use <input> not form)
- user will click 'submit' button or hit 'enter'
- the type of input will be text
- the item entered will  be appended to the DOM
- the user can check(input type:checkbox) when a task is completed
- the use can delete the task with or without completing

## Buttons

1. BEGIN 
2. submit button: clicked after the user enters task
3. delete button: will show up only when a task is entered. The user can delete a task 
4. delete button: this button will delete all completed taks
   whether completed or not
5. buttons(state): used to toggle state between 'all', 'pending' and 'completed'
6. END

## Checkbox
1. BEGIN
2. user will select the checkbox when a task is completed
3. set to a boolean variable starting as false then, true when clicked
4. the checkbox can trigger a function that will update the 'completed' state when the user selects it
5. END

## unordered list
1. BEGIN 
2. the list is where the tasks will be appended to once the user enters them
3. the tasks will be added as the user enters them(one at a time)
4. map the values from the function that adds user inputs to the UI and append that text
5. END

## Function addTodo;
1. BEGIN
2. this function will take the use input from the form  
3. append it to the DOM as a list item
4. this function will require a unique id for each list item(use timestamp) and a parameter
5. this function will be referenced in the onClick function when the add button is clicked when a use enters a task
6. END

## Function deleteTodo;
1. BEGIN
2. this function will delete a task when the delete button is clikced by the user
3. uses a filter method and then checks whether the filtered items have id's or not
4. this function will be referenced in the onClick function when the delete button is clicked
5. END

## onChange function (task input form)
1. BEGIN
2. it will listen for a change in the input form
3. it will grab the value from the DOM (form element)
4. END

## onClick function (add list item button)
1. BEGIN
2. it listens for the add button click event. 
3. And when clikced it will reference the addTodo function 
4. and the user input value from the form will be appended to the UI as a list item
5. END

## onClick function (delete list item button)
1. BEGIN 
2. it will listen for a click event of the delete button. 
3. When clikced, it will reference the deleteTodo function a
4. and remmove a list item from the UI(list item). 
5. It will use the given parameter and the unique id to identify which list item to delete
6. END

## submitHandler function
1. BEGIN
2. this function will be called when the submit button is clicked after the user submits form data
3. the form will be cleared when the user clicks submit
4. the 

## inputHandler
1. BEGIN
2. grabs the value from the input form when a user enters a task
3. the function will set state to allow the user to enter a new task
(will add more details later)
4. 



