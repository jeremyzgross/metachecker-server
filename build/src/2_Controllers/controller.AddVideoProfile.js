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
exports.addVideoProfile = void 0;
const model_AddVideoProfile_1 = require("../1_Models/model.AddVideoProfile");
const addVideoProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoProfileMetadata = req.body;
        const result = yield (0, model_AddVideoProfile_1._addVideoProfile)(videoProfileMetadata);
        // Convert bitrate and audio_bitrate strings to arrays
        result.bitrate = parseNumRange(result.bitrate);
        result.audio_bitrate = parseNumRange(result.audio_bitrate);
        res.json(result);
    }
    catch (error) {
        console.error('Error adding profile', error);
        next(error);
    }
});
exports.addVideoProfile = addVideoProfile;
// parse numrange string into an array of numbers
const parseNumRange = (numRangeString) => {
    if (!numRangeString || numRangeString === '[]') {
        return [];
    }
    const range = numRangeString.slice(1, -1).split(',').map(num => parseInt(num));
    return range;
};
