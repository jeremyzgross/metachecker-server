"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
exports.upload = (0, multer_1.default)({
    dest: 'uploads/',
    limits: { fileSize: 1000 * 1024 * 1024 },
});
//noting for later that multer has ability to process multiple files with the .array method
