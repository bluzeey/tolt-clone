"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
const PORT = 3000;
// Handling GET / Request
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/", index_1.default);
app.use("/auth", auth_1.default);
// Server setup
app.listen(PORT, () => {
    console.log("The application is listening " + "on port http://localhost:" + PORT);
});
