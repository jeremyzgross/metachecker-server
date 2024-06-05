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
exports._addVideoProfile = void 0;
const config_1 = require("../0_Config/config");
const _addVideoProfile = (VideoProfileMetadata) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Format bitrate and audio_bitrate as PostgreSQL arrays
        const bitrate = Array.isArray(VideoProfileMetadata.bitrate)
            ? `[${VideoProfileMetadata.bitrate.join(', ')}]`
            : '[]';
        const audio_bitrate = Array.isArray(VideoProfileMetadata.audio_bitrate)
            ? `[${VideoProfileMetadata.audio_bitrate.join(', ')}]`
            : '[]';
        const [insertedmetaData] = yield (0, config_1.db)('video_metadata').insert({
            user_id: VideoProfileMetadata.user_id,
            profile_name: VideoProfileMetadata.profile_name,
            codec_name: VideoProfileMetadata.codec_name,
            profile: VideoProfileMetadata.profile,
            width: VideoProfileMetadata.width,
            height: VideoProfileMetadata.height,
            field_order: VideoProfileMetadata.field_order,
            r_frame_rate: VideoProfileMetadata.r_frame_rate,
            duration: VideoProfileMetadata.duration,
            bitrate: bitrate,
            audio_codec_name: VideoProfileMetadata.audio_codec_name,
            sample_rate: VideoProfileMetadata.sample_rate,
            channels: VideoProfileMetadata.channels,
            channel_layout: VideoProfileMetadata.channel_layout,
            audio_bitrate: audio_bitrate,
        }).returning('*');
        return insertedmetaData;
    }
    catch (error) {
        console.error("Error inserting video profile metadata:", error);
        throw error;
    }
});
exports._addVideoProfile = _addVideoProfile;
