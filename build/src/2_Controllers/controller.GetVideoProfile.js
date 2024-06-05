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
exports.GetVideoProfile = void 0;
const model_GetVideoProfile_1 = require("../1_Models/model.GetVideoProfile");
const GetVideoProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = parseInt(req.params.user_id, 10);
        const profileId = parseInt(req.params.profile_id, 10);
        const videoProfile = yield (0, model_GetVideoProfile_1._getVideoProfile)(userId, profileId);
        if (!videoProfile) {
            return res.status(404).json({ error: 'Video profile not found' });
        }
        res.status(200).json(videoProfile);
    }
    catch (error) {
        console.error('something went wrong with getting the profile', error);
        next(error);
    }
});
exports.GetVideoProfile = GetVideoProfile;
