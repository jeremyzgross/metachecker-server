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
exports.UploadVideo = void 0;
const model_UploadVideo_1 = require("../1_Models/model.UploadVideo");
const config_1 = require("../0_Config/config");
const compareVideoMetadataFunction_1 = require("./compareVideoMetadataFunction");
const fs_1 = __importDefault(require("fs"));
const UploadVideo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filePath = req.file.path;
        const user_id = parseInt(req.body.user_id, 10);
        const profile_id = parseInt(req.body.profile_id, 10);
        const allVideoData = yield (0, model_UploadVideo_1._uploadVideo)(filePath);
        // After processing the video, delete the file
        fs_1.default.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
            }
            else {
                console.log('File deleted successfully:', filePath);
            }
        });
        const resJSON = {
            uploadedVideo: filePath,
            allVideoData: allVideoData
        };
        const videoProfileInterface = yield checkVideo(user_id, profile_id);
        if (!videoProfileInterface) {
            return res.status(404).json({ error: 'Video profile not found' });
        }
        const QCResults = (0, compareVideoMetadataFunction_1.compareVideoMetadataFunction)(resJSON, videoProfileInterface);
        res.json({ QCResults, resJSON, videoProfileInterface });
    }
    catch (error) {
        console.error('Error getting metadata:', error);
        res.status(500).send('Error getting metadata');
        next(error);
    }
});
exports.UploadVideo = UploadVideo;
const checkVideo = (user_id, profile_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileToUse = yield (0, config_1.db)('video_metadata')
            .select('codec_name', 'profile', 'width', 'height', 'field_order', 'r_frame_rate', 'duration', 'bitrate', 'audio_codec_name', 'sample_rate', 'channels', 'channel_layout', 'audio_bitrate')
            .where({ user_id, id: profile_id })
            .first();
        if (!profileToUse) {
            console.error("Profile not found for user_id:", user_id, "and profile_id:", profile_id);
            return null;
        }
        return profileToUse;
    }
    catch (error) {
        console.error("Error checking video:", error);
        throw error;
    }
});
