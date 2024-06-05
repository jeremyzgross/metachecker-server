"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const route_login_register_1 = require("./3_Routes/route.login.register");
const route_AddVideoProfile_1 = require("./3_Routes/route.AddVideoProfile");
const route_GetVideoProfile_1 = require("./3_Routes/route.GetVideoProfile");
const route_DeleteVideoProfile_1 = require("./3_Routes/route.DeleteVideoProfile");
const route_EditVideoProfile_1 = require("./3_Routes/route.EditVideoProfile");
const route_UploadVideo_1 = require("./3_Routes/route.UploadVideo");
const route_GetAllProfilesforUser_1 = require("./3_Routes/route.GetAllProfilesforUser");
const app = (0, express_1.default)();
const PORT = 3000;
// CORS Configuration
app.use((0, cors_1.default)());
// Middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Serve static files from the React app
app.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/build')));
// Routers
app.use('/api', route_login_register_1.router_login_register);
app.use('/api', route_AddVideoProfile_1.router_add_video_profile);
app.use('/api', route_GetVideoProfile_1.router_get_video_profile);
app.use('/api', route_DeleteVideoProfile_1.router_delete_video_profile);
app.use('/api', route_EditVideoProfile_1.router_edit_video_profile);
app.use('/api', route_UploadVideo_1.router_upload_video);
app.use('/api', route_GetAllProfilesforUser_1.router_get_all_video_profiles_for_user);
// error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
