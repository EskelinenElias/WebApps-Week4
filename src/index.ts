import app from "./app"

// Configure server settings
const host: string = "127.0.0.1"
const port: number = 3000

// Start the server
app.listen(port, () => { 
  console.log(`Server running at http://${host}:${port}/`)
})