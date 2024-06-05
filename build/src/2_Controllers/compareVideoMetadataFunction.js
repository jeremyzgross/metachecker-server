"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareVideoMetadataFunction = void 0;
const compareVideoMetadataFunction = (resJSON, videoProfileInterface) => {
    //converts string of array into numbers
    const isWithinRange = (range, value) => {
        const [min, max] = range.replace(/[\[\]]/g, '').split(',').map(Number);
        return value >= min && value <= max;
    };
    // metadata is probed in bit/s. This converts them to kilobits per second
    const videoBitRateKbps = resJSON.allVideoData.video.bit_rate / 1000;
    const audioBitRateKbps = resJSON.allVideoData.audio.bit_rate / 1000;
    const comparisons = {};
    // Compare each field in videoProfileInterface
    Object.entries(videoProfileInterface).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            comparisons[key] = true; // Treat null or undefined values as a match
        }
        else if (key === "bitrate" || key === "audio_bitrate") { //special case for ranges
            comparisons[key] = isWithinRange(value, key === "bitrate" ? videoBitRateKbps : audioBitRateKbps);
        }
        else if (key === "audio_codec_name") { //issues with aac codec name
            const probedAudioCodecName = resJSON.allVideoData.audio.codec_name.toLowerCase().trim();
            const expectedAudioCodecName = value.toLowerCase().trim();
            comparisons[key] = probedAudioCodecName === expectedAudioCodecName;
        }
        else {
            comparisons[key] = resJSON.allVideoData.video[key] === value || resJSON.allVideoData.audio[key] === value;
        }
    });
    return comparisons;
};
exports.compareVideoMetadataFunction = compareVideoMetadataFunction;
