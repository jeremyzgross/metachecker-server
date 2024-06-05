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
exports._getVideoProfile = void 0;
const config_1 = require("../0_Config/config");
const _getVideoProfile = (user_id, profile_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [selectedVideoProfile] = yield (0, config_1.db)('video_metadata')
            .select('profile_name', 'codec_name', 'profile', 'width', 'height', 'field_order', 'r_frame_rate', 'duration', 'bitrate', 'audio_codec_name', 'sample_rate', 'channels', 'channel_layout', 'audio_bitrate')
            .where('user_id', user_id)
            .andWhere('id', profile_id);
        return selectedVideoProfile;
    }
    catch (error) {
        console.error("Error fetching video profile:", error);
        throw error;
    }
});
exports._getVideoProfile = _getVideoProfile;
