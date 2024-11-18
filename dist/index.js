"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// Configure server settings
const host = "127.0.0.1";
const port = 3000;
// Start the server
app_1.default.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
