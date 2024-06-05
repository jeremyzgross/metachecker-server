"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.db = void 0;
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const generateToken = (res, id) => {
    const token = jsonwebtoken_1.default.sign({ id }, process.env.SECRET, {
        expiresIn: '30d'
    });
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });
};
exports.generateToken = generateToken;
const db = (0, knex_1.default)({
    client: 'pg',
    connection: {
        connectionString: process.env.POSTGRES_URL,
        ssl: { rejectUnauthorized: false },
    },
});
exports.db = db;
