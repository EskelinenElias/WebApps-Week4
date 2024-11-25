// Function to add todo
async function addTodo(user, todo) {
  // Send POST request
  const response = await fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, todo })
  });
  return response.json();
}

// Function to get todo
async function getTodos(user) {
  try {
    // Send POST request
    const response = await fetch(`/todos/${user}`);
    // Parse the response
    return await response.json();
  } catch(error) {
    console.error(`Could not get todos for user ${user}`, error); 
    return null; 
  }
}

// Function to display todos on the page
function displayTodos(name, todos) {
  // Clear ToDo list
  const todoList = document.getElementById("todoList"); 
  todoList.innerHTML = ""; 
  // Add each ToDo to the list
  todos.forEach(todo => {
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${todo}`;
    // Add delete button
    const deleteLink = document.createElement("a");
    deleteLink.textContent = "Delete";
    deleteLink.href = "#";
    deleteLink.classList.add("delete-task");
    // Delete ToDo if the delete button is clicked
    deleteLink.addEventListener("click", () => {
      // Delete ToDo
      deleteTodo(name, todo)
      // Update Todo list
      updateTodos(name)
    }); 
    // Add delete button to the list item
    listItem.appendChild(deleteLink); 
    // Add item to the list
    todoList.appendChild(listItem);
  }); 
}

// Function to update ToDo list
async function updateTodos(name) {
  // Send POST request
  const response = await getTodos(name);
  console.log(response) 
  if (!response.todos) { 
    console.log(`No todos for user ${name}.`)
    return; 
  }
  const todos = response.todos; 
  // List todos
  displayTodos(name, todos); 
}

async function deleteUser(user) {
  // Send DELETE request
  const response = await fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });
  return response.json();
}

// Function to delete a todo from a user
async function deleteTodo(name, todo) {
  // Delete todo
  fetch('/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, todo })
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(`Successfully deleted todo ${todo} of user ${name}`, data.body);
  }).catch((error) => {
    console.error(`Error occurred while attempting to delete ${todo} of user ${name}`, error);
  })
}

// Add new todo when form is submitted
document.getElementById('todoForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const user = document.getElementById('userInput').value;
  const todo = document.getElementById('todoInput').value;
  // Check form data
  if (!user || !todo) {
    console.error("Could not add todo"); 
    return; 
  }
  // Send POST request
  const response = await addTodo(user, todo); 
  const message = response; 
  console.log("Server responded with: ", message)
  document.getElementById("status").innerText = message; 
});

// Search for user when search form is submitted
document.getElementById('searchForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const user = document.getElementById('searchInput').value;
  // Check form data
  if (!user) {
    console.error("Could not get todos"); 
    return; 
  }
  // Update todo list
  updateTodos(user); 
}); 

// Delete user if delete button is pressed
document.getElementById("deleteUser").addEventListener("click", async () => {
  // Get user 
  const user = document.getElementById('searchInput').value;
  // Delete user
  fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(`Successfully deleted user ${user}`, data.body);
  }).catch((error) => {
    console.error(`Error occurred while attempting to delete user ${user}`, error);
  })
}); 