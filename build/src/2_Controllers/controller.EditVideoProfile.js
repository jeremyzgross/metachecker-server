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
exports.UpdateVideoProfile = void 0;
const model_EditVideoProfile_1 = require("../1_Models/model.EditVideoProfile");
const UpdateVideoProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // extract user_id and profile_id from params
        const userId = parseInt(req.params.user_id, 10);
        const profileId = parseInt(req.params.profile_id, 10);
        /** Extract video metadataupdates from request body
         * example:
         *  {
       "profile_name": "updated profile via PUT",
      "codec_name": "new_codec_name",
      "width": 1920,
      "height": 1080
    *}
    etc
    */
        const updates = req.body;
        // Update the video profile using the IDs and updates
        const success = yield (0, model_EditVideoProfile_1._updateVideoProfile)(userId, profileId, updates);
        // return a 404 status if nothing changed
        if (!success) {
            return res.status(404).json({ error: 'Video profile not found' });
        }
        // Return a success response
        res.status(200).json({ message: 'Video profile updated successfully' });
    }
    catch (error) {
        next(error);
    }
});
exports.UpdateVideoProfile = UpdateVideoProfile;
