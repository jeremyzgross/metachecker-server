"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const model_login_register_js_1 = require("../1_Models/model.login.register.js");
const config_js_1 = require("../0_Config/config.js");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield (0, model_login_register_js_1._registerUser)(userData);
        const id = result.user.id;
        (0, config_js_1.generateToken)(res, id);
        res.json(result.user);
    }
    catch (error) {
        console.error('Error register user', error);
        next(error);
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userLogin = req.body;
        console.log(userLogin);
        const result = yield (0, model_login_register_js_1._loginUser)(userLogin);
        const first_name = result.user.first_name;
        const id = result.user.id;
        (0, config_js_1.generateToken)(res, id); // Generate token after successful login
        res.json({ id, first_name, });
    }
    catch (error) {
        console.error('Error login');
        next(error);
    }
});
exports.loginUser = loginUser;
