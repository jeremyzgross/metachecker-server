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
exports._getAllVideoProfilesForUser = void 0;
const config_1 = require("../0_Config/config");
const _getAllVideoProfilesForUser = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allVideoProfiles = yield (0, config_1.db)('video_metadata').select('*').where('user_id', user_id);
        return allVideoProfiles;
    }
    catch (error) {
        console.error("Error fetching all video profiles for user", error);
        throw error;
    }
});
exports._getAllVideoProfilesForUser = _getAllVideoProfilesForUser;
