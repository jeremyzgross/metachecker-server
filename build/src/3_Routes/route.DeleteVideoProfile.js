"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_delete_video_profile = void 0;
const express_1 = __importDefault(require("express"));
const controller_DeleteVideoProfile_1 = require("../2_Controllers/controller.DeleteVideoProfile");
exports.router_delete_video_profile = express_1.default.Router();
exports.router_delete_video_profile.delete('/user/:user_id/profile/:profile_id', controller_DeleteVideoProfile_1.DeleteVideoProfile);
