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

async function deleteUser(user) {
  // Send DELETE request
  const response = await fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });
  return response.json();
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
  // Send POST request
  const response = await getTodos(user);
  console.log(response) 
  if (!response.todos) { 
    console.log(`No todos for user ${user}.`)
    return; 
  }
  const todos = response.todos; 
  // List todos
  const todoList = document.getElementById("todoList"); 
  todoList.innerHTML = ''; 
  todos.forEach(todo => {
    const listItem = document.createElement('li');
    listItem.textContent = `${todo}`;
    todoList.appendChild(listItem);
  }); 
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