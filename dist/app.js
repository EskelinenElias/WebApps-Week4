"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./data/database");
const app = (0, express_1.default)();
// Add middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Add routes
app.use('/', routes_1.default);
// Serve static files from 'public'
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Add "database"
const dataPath = "./data.json";
const database = new database_1.Database(dataPath);
exports.database = database;
exports.default = app;
