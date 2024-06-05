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
exports.DeleteVideoProfile = void 0;
const model_DeleteVideoProfile_1 = require("../1_Models/model.DeleteVideoProfile");
const DeleteVideoProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract user_id and profile_id from request parameters
        const userId = parseInt(req.params.user_id, 10);
        const profileId = parseInt(req.params.profile_id, 10);
        // Delete the video profile using the IDs
        const success = yield (0, model_DeleteVideoProfile_1._deleteVideoProfile)(userId, profileId);
        // If no rows were affected, return a 404 status
        if (!success) {
            return res.status(404).json({ error: 'Video profile not found' });
        }
        // Return a success response
        res.status(200).json({ message: 'Video profile deleted successfully' });
    }
    catch (error) {
        // Handle errors and pass them to the error handling middleware
        next(error);
    }
});
exports.DeleteVideoProfile = DeleteVideoProfile;
