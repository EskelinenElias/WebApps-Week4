// Function to add todo
async function addTodo(user, todos) {
  // Send POST request
  const response = await fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, todos })
  });
  // Parse result
  return await response.json();
}

// Add new todo when form is submitted
document.getElementById('todoForm').addEventListener('click', async (event) => {
  event.preventDefault();
  // Get form data
  const user = document.getElementById('userInput').value;
  const todos = document.getElementById('todoInput').value;
  // Check form data
  if (!user || !todos) {
    console.error("Could not add todo"); 
    return; 
  }
  // Send POST request
  const response = await addTodo(user, todos); 
  console.log("Server responded with: ", response.message)
});
