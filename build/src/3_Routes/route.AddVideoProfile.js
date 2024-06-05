"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_add_video_profile = void 0;
const express_1 = __importDefault(require("express"));
const controller_AddVideoProfile_1 = require("../2_Controllers/controller.AddVideoProfile");
exports.router_add_video_profile = express_1.default.Router();
exports.router_add_video_profile.post('/addvideoprofile', controller_AddVideoProfile_1.addVideoProfile);
