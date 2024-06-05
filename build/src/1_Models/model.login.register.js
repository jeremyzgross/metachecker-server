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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._loginUser = exports._registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// import { Transaction } from 'knex';
const config_js_1 = require("../0_Config/config.js");
const _registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    let trx;
    try {
        const hashedPassword = yield bcrypt_1.default.hash(userData.password, 10);
        trx = yield config_js_1.db.transaction();
        const existingUser = yield trx('users').where('username', userData.username).first();
        if (existingUser) {
            throw new Error('Username is already taken');
        }
        const [user] = yield trx('users').insert({
            first_name: userData.first_name,
            last_name: userData.last_name,
            username: userData.username,
            email: userData.email,
        }, ['id', 'username', 'email', 'first_name', 'last_name']);
        yield trx('hashpwd').insert({
            user_id: user.id,
            password: hashedPassword
        });
        yield trx.commit();
        return {
            user
        };
    }
    catch (error) {
        if (trx) {
            yield trx.rollback();
        }
        console.error('Error registering user:', error);
        throw new Error('Internal Server Error');
    }
});
exports._registerUser = _registerUser;
const _loginUser = (userLogin) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [user] = yield (0, config_js_1.db)('users')
            .select('users.username', 'hashpwd.password', 'users.first_name', 'users.id').where({ 'users.username': userLogin.username })
            .leftJoin('hashpwd', 'users.id', 'hashpwd.user_id');
        if (!user) {
            throw new Error('User not found');
        }
        return { user };
    }
    catch (error) {
        console.error(error);
        throw error; //
    }
});
exports._loginUser = _loginUser;
