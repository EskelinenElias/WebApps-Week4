// Function to register a new user
async function addUser(name, email) {
  // Send POST request
  const response = await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name:name, email:email })
  });
  // Parse result
  const result =  await response.json();
  return result; 
}

// Function to get all registered users
async function getUsers() {
  // Fetch registered user data
  const response = await fetch('/users', { method: 'GET' });
  // Check response status
  if (response.status !== 201) {
    console.error("Failed to fetch user data");
    return;
  }
  // Parse response 
  const data = await response.json(); 
  // Check that the data is intact
  if (!data || !data.users) {
    console.error("Failed to parse user data");
    return;
  }
  // Get registered users
  const users = data.users; 
  console.log(users)
  return users; 
}

// Function to update user list with fresh data
async function refreshUserList() {
  // Fetch registered users
  const users = await getUsers(); 
  if (!users) {
    console.error("Could not load user data"); 
    return; 
  }
  // Clear user list
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  // Add each user to the list
  users.forEach(user => {
    // Create new list item
    const listItem = document.createElement('li');
    // Add user data
    listItem.textContent = `${user.name} – ${user.email}`;
    // Add list item to user list
    userList.appendChild(listItem);
  });  
}

// Add new user when user form is submitted
document.getElementById('userForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // Send POST request
  const result = await addUser(name, email); 
  // Refresh registered users list
  refreshUserList(); 
});

// Load registered users data when user list refresh button is clicked
document.getElementById('getUsers').addEventListener('click', async () => {
  // Update user list with fresh data
  refreshUserList();
});
