"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_upload_video = void 0;
const express_1 = __importDefault(require("express"));
const middleware_uploadHandler_1 = require("../4_Middleware/middleware.uploadHandler");
const controller_UploadVideo_1 = require("../2_Controllers/controller.UploadVideo");
exports.router_upload_video = express_1.default.Router();
//noting for later that multer has ability to process multiple files with the .array method
exports.router_upload_video.post('/upload', middleware_uploadHandler_1.upload.single('filename'), controller_UploadVideo_1.UploadVideo); //add controller function
