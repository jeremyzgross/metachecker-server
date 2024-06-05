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
exports._updateVideoProfile = void 0;
const config_1 = require("../0_Config/config");
// export interface VideoProfileMetadata {
//     id?: number; // optional because it will be auto-generated
//     user_id: number; // NEED TO GET THIS FROM SESSION DATA LATER!!!
//     profile_name: string
//     codec_name?: string;
//     profile?: string;
//     width?: number;
//     height?: number;
//     field_order?: string;
//     r_frame_rate?: string;
//     duration?: number;
//     bitrate?: [number, number] | null; // TypeScript doesn't have a direct NUMRANGE type, so we use a tuple
//     audio_codec_name?: string;
//     sample_rate?: number;
//     channels?: number;
//     channel_layout?: string;
//     audio_bitrate?: [number, number] | null; // TypeScript doesn't have a direct NUMRANGE type, so we use a tuple
// }
const _updateVideoProfile = (user_id, profile_id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rowsAffected = yield (0, config_1.db)('video_metadata')
            .where({ user_id, id: profile_id })
            .update(updates);
        return rowsAffected > 0;
    }
    catch (error) {
        console.error("Error updating video profile:", error);
        throw error;
    }
});
exports._updateVideoProfile = _updateVideoProfile;
