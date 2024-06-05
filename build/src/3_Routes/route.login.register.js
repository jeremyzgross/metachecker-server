"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_login_register = void 0;
const express_1 = __importDefault(require("express"));
const controller_login_register_js_1 = require("../2_Controllers/controller.login.register.js");
exports.router_login_register = express_1.default.Router();
exports.router_login_register.post('/register', controller_login_register_js_1.registerUser);
exports.router_login_register.post('/login', controller_login_register_js_1.loginUser);
