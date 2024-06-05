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
exports._uploadVideo = void 0;
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const _uploadVideo = (filepath) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        try {
            const getVideoMetadata = () => {
                return new Promise((resolve, reject) => {
                    fluent_ffmpeg_1.default.ffprobe(filepath, (err, metadata) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const videoStream = metadata.streams.find((stream) => stream.codec_type === "video");
                        if (videoStream) {
                            resolve({
                                video: videoStream,
                            });
                        }
                        else {
                            reject(new Error("No video stream found"));
                        }
                    });
                });
            };
            const getAudioMetadata = () => {
                return new Promise((resolve, reject) => {
                    fluent_ffmpeg_1.default.ffprobe(filepath, (err, metadata) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const audioStream = metadata.streams.find((stream) => stream.codec_type === "audio");
                        if (audioStream) {
                            resolve({
                                audio: audioStream,
                            });
                        }
                        else {
                            reject(new Error("No audio stream found"));
                        }
                    });
                });
            };
            Promise.all([getVideoMetadata(), getAudioMetadata()])
                .then((results) => {
                const [videoMetadata, audioMetadata] = results;
                resolve({
                    video: videoMetadata.video,
                    audio: audioMetadata.audio
                });
            })
                .catch((error) => {
                reject(error);
            });
        }
        catch (error) {
            console.error("Something went wrong with the upload. This is in the model", error);
            reject(error);
        }
    });
});
exports._uploadVideo = _uploadVideo;
