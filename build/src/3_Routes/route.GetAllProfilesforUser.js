"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_get_all_video_profiles_for_user = void 0;
const express_1 = __importDefault(require("express"));
const controller_GetAllProfilesforUser_1 = require("../2_Controllers/controller.GetAllProfilesforUser");
exports.router_get_all_video_profiles_for_user = express_1.default.Router();
exports.router_get_all_video_profiles_for_user.get('/user/:user_id', controller_GetAllProfilesforUser_1.GetAllVideoProfilesForUser);
