import express, {Express, Request, Response} from "express"
import path from "path"
import router from "./routes"
import morgan from "morgan"
import { Database } from "./data/database"

const app: Express = express()

// Add middleware
app.use(express.json())
app.use(morgan("dev"))

// Add routes
app.use('/', router)

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, '../public')))

// Add "database"
const dataPath = "./data.json"; 
const database: Database = new Database(dataPath); 

export default app; 
export { database };
