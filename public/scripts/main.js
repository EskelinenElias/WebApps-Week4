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
